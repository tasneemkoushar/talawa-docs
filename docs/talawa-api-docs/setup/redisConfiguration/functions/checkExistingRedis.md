[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [setup/redisConfiguration](../README.md) / checkExistingRedis

# Function: checkExistingRedis()

\> **checkExistingRedis**(): `Promise`\<`string` \| `null`\>

The function `checkExistingRedis` checks if there is an existing Redis connection by iterating
through a list of Redis URLs and testing the connection.

## Returns

`Promise`\<`string` \| `null`\>

The function `checkExistingRedis` returns a Promise that resolves to a string or null.

## Defined in

[src/setup/redisConfiguration.ts:71](https://github.com/PalisadoesFoundation/talawa-api/blob/bba5d82264abb62b9e358a3d3fe1af18a8a8f6e4/src/setup/redisConfiguration.ts#L71)
