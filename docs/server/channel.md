---
id: channel
title: Channel
sidebar_label: Channel
---

`Channel`(aka `Chatroom`) is an important concept when building chat apps. `Channel` can aggregate users and make them prepare chats. There can exist many relational models in-between `User` and `Channel`. This way makes life easier for a developer who wants to add complex business logic in their chat application.

Say you want to make the user grant permission to other users in the `Channel`, then we can create `Membership` relation in between. Another scenario is when the user wants to manage the sound(vibrate, silent, etc) of each channel, we can create `Sound` relation. Like so, we can add more relations in between to handle more complex logic.

Currently, we've managed to have the above scenario in one relation which is `Membership`. 

## Entity Design

<img src="https://user-images.githubusercontent.com/27461460/88914167-2de67d80-d29d-11ea-8230-6762a4cfe1b4.png" width="400"/>

The decision was made in our first proposal in designing [Entity Relation Model](https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model).
* Note that the above [UML](https://creately.com/blog/diagrams/uml-diagram-types-examples) diagram is not recent and this is keep 
changing as we continue implementing cool features.

As you can see in the `image`, there are `userAlert`, `userMode` as well as `type` of membership which determines what type of permissions user has in the `Channel`. We usually call this a [single table inheritance](https://en.wikipedia.org/wiki/Single_Table_Inheritance) which many models exist in a table. Therefore, we are writing this so that the contributors won't get confused.

## Creating channel

Many developers may have tried similar implementations since there are millions of chat apps around the world. This is however not that simple when creating a channel with a unique number of users.

In most [ORM](https://en.wikipedia.org/wiki/Object-relational_mapping), they have the [in operator as in stackoverflow](https://stackoverflow.com/questions/42719750/sequelize-relation-with-where-in-array?rq=1).

Developers usually use this to find if subarray matches the query. This is also possible with [prisma filtering](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/filtering#filter-on-related-records) in a similar way. However, `in` operator will return all the rows of the query when the subarray matches.

<img src="https://user-images.githubusercontent.com/27461460/90379570-da09d000-e0b5-11ea-8215-df2828108b58.png" width="200"/>

As in the image, when you query for users of `tom` and `jerry`, it will search all other arrays in which subarray exists. A similar discussion could be found on [Prisma1 forum](https://v1.prisma.io/forum/t/query-for-exact-match-of-array-of-ids/5700/17).

We resolved above problem by checking its length. Currently, we'd also want to find out any better solution over the below code.

```ts
const findChannelWithUserIds = async () => {
  const channels = await ctx.prisma.channel.findMany({
    include: {
      membership: {
        select: {
          userId: true,
          membershipType: true,
        },
      },
    },
    where: {
      membership: {
        every: {
          userId: { in: [userId, ...userIds] },
        },
      },
    },
  });

  const totalUsers = userIds.length + 1; // +1 for auth user

  let existingChannel: Channel;

  for (const channel of channels) {
    if (totalUsers === channel.membership.length) {
      existingChannel = channel;
      break;
    }
  }

  return existingChannel;
};

const existingChannel = await findChannelWithUserIds();
```

Therefore, we could manage the `unique` channel with unique array of userIds.

## Creating channel with message

It is also possible to create channel with the message.

```ts
message && await createMessage(message, existingChannel.id);
```

We check if the message argument is not null then call `createMessage`.

```ts
const createMessage = (
  { text, messageType = MessageType.text, fileUrls = [], imageUrls = [] } : Message,
  channelId: string,
) => ctx.prisma.message.create({
  data: {
    text,
    messageType,
    fileUrls: { set: fileUrls },
    imageUrls: { set: imageUrls },
    channel: { connect: { id: channelId } },
    sender: { connect: { id: userId } },
  },
});
```
* Currently, we are facing issues in redefining types if `Message` since we can't get it from anywhere (08/17/2020).


## Types of channel

There are two types of channel defined in `ChannelType` which are **private** and **public**.

The **public** channel can have a duplicate array of `users` and they can be created continuously while the **private** channel needs unique users.
* By passing array of `userIds` in `ChannelCreateInput`, users will grant the `Permission` to newly created channel. If the channel is **public**, there will be a different `permissionType` for each user and one of them will grant a `owner` permission.


## Leaving the channel

The `isVisible` field exists in `Membership` model for **private** channel when the user wants to leave the channel. It will be set to `false` and this will affect `myChannels` query results and will be hidden when the user wants to fetch his or her channels.

However, `hidden` channel will automatically be `visible` when new **message** has been created and this is defined in `changeVisibilityWhenInvisible` function.

```ts
const changeVisibilityWhenInvisible = () => ctx.prisma.membership.update({
  data: { isVisible: true },
  where: {
    userId_channelId: {
      userId,
      channelId: existingChannel.id,
    },
  },
});
```

## Current status

#### 08/17/2020

In our mobile application, we only have **private** channel senario and the **public** channel senario will be updated in future when things go well. The **public** channel will be any kinds of group chats except the [direct messages in slack](https://slack.com/intl/en-kr/help/articles/212281468-What-is-a-direct-message).

