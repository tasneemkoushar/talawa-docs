[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / SubscriptionSubscriberObject

# Interface: SubscriptionSubscriberObject\<TResult, TKey, TParent, TContext, TArgs\>

## Type Parameters

• **TResult**

• **TKey** *extends* `string`

• **TParent**

• **TContext**

• **TArgs**

## Properties

### resolve?

\> `optional` **resolve**: [`SubscriptionResolveFn`](../type-aliases/SubscriptionResolveFn.md)\<`TResult`, `\{ [key in string]: TResult \}`, `TContext`, `TArgs`\>

#### Defined in

[src/types/generatedGraphQLTypes.ts:3392](https://github.com/PalisadoesFoundation/talawa-api/blob/a6e7ac91b581c9109559657faf0f934f3eb41fe7/src/types/generatedGraphQLTypes.ts#L3392)

***

### subscribe

\> **subscribe**: [`SubscriptionSubscribeFn`](../type-aliases/SubscriptionSubscribeFn.md)\<`\{ [key in string]: TResult \}`, `TParent`, `TContext`, `TArgs`\>

#### Defined in

[src/types/generatedGraphQLTypes.ts:3391](https://github.com/PalisadoesFoundation/talawa-api/blob/a6e7ac91b581c9109559657faf0f934f3eb41fe7/src/types/generatedGraphQLTypes.ts#L3391)
