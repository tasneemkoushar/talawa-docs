[**talawa-api**](../../../../README.md)

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

[src/resolvers/Query/event.ts:13](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/resolvers/Query/event.ts#L13)
