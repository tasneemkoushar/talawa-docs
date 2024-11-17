[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Query/event](../README.md) / event

# Variable: event

\> `const` **event**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"event"`\]

This query will fetch the event with _id === args.id from the database.

## Param

## Param

An object that contains `id` of the event that need to be fetched.

## Returns

An `event` object. If the `event` object is null then it throws `NotFoundError` error.

## Remarks

You can learn about GraphQL `Resolvers`
[here](https://www.apollographql.com/docs/apollo-server/data/resolvers/).

## Defined in

[src/resolvers/Query/event.ts:13](https://github.com/PalisadoesFoundation/talawa-api/blob/a6e7ac91b581c9109559657faf0f934f3eb41fe7/src/resolvers/Query/event.ts#L13)
