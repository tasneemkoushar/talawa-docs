[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [services/PostCache/cachePosts](../README.md) / cachePosts

# Function: cachePosts()

\> **cachePosts**(`posts`): `Promise`\<`void`\>

Caches the provided array of InterfacePost objects in Redis.

## Parameters

• **posts**: [`InterfacePost`](../../../../models/Post/interfaces/InterfacePost.md)[]

An array of InterfacePost objects to be cached.

## Returns

`Promise`\<`void`\>

A promise resolving to void.

## Defined in

[src/services/PostCache/cachePosts.ts:11](https://github.com/PalisadoesFoundation/talawa-api/blob/a6e7ac91b581c9109559657faf0f934f3eb41fe7/src/services/PostCache/cachePosts.ts#L11)
