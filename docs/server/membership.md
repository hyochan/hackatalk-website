---
id: membership
title: Membership
sidebar_label: Membership
---

As described in [Channel](docs/server/channel), `Membership` model is a [single table inheritance](https://medium.com/@User3141592/when-to-use-single-table-inheritance-vs-multiple-table-inheritance-db7e9733ae2e) and one of them judges user's permission to `Channel`.

## Type of membership

> Types of membership are defined in `MembershipType`. Note that the `MembershipType` is only concerned when the channel is **public**. All users will have the same `membershipType` when the channel is **private**.

1. owner
   * The owner of the **channel** can add or remove `admin` users in the **channel**.
   * If `owner` wants to leave the **public** channel, he or she needs to transfer ownership to other users if the users are in the channel.
   * The owner of the **public** channel can change the **channel** name.
2. admin
   * The `admin` user can add more users to the channel.
3. member
   * The only thing member can do in the **public** channel is sending messages and leaving the channel.

