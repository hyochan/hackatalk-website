---
id: message
title: Message
sidebar_label: Message
---

Creating a message is pretty straightforward as long as you know the `id` of the channel to send to.

## Type of message

> Types of message are defined in `MessageType`.

1. text
   * Text message
2. photo
   * Photo type will display images in client
3. file
   * File type will be displayed as a download link in client

The `photo` and the `file` will be provided by the array of string which contains urls. The urls will be provided by `singleUpload` mutation query defined in our [HackaTalk's graphql server](http://hackatalk.azurewebsites.net/graphql).

## Encryption

The `encryption` is being done in `text` message only. This should be `encrypted` and `decrpyted` when communicating with [database](https://en.wikipedia.org/wiki/Database). We are using [aes-192-cbc](https://encode-decode.com/aes-192-cbc-encrypt-online) algorithm with [crypto](https://nodejs.org/api/crypto.html) package in [nodejs](https://nodejs.org).
* You can read more about it in [nodejs crypto](https://nodejs.org/api/crypto.html).