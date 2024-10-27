[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / SubscriptionSubscribeFn

# Type Alias: SubscriptionSubscribeFn()\<TResult, TParent, TContext, TArgs\>

\> **SubscriptionSubscribeFn**\<`TResult`, `TParent`, `TContext`, `TArgs`\>: (`parent`, `args`, `context`, `info`?) =\> `AsyncIterable`\<`TResult`\> \| `Promise`\<`AsyncIterable`\<`TResult`\>\>

## Type Parameters

• **TResult**

• **TParent**

• **TContext**

• **TArgs**

## Parameters

• **parent**: `TParent`

• **args**: `TArgs`

• **context**: `TContext`

• **info?**: `GraphQLResolveInfo`

## Returns

`AsyncIterable`\<`TResult`\> \| `Promise`\<`AsyncIterable`\<`TResult`\>\>

## Defined in

[src/types/generatedGraphQLTypes.ts:3138](https://github.com/PalisadoesFoundation/talawa-api/blob/4a88fe62b20ebda9653c55ae8d39d6c6fac8831f/src/types/generatedGraphQLTypes.ts#L3138)
