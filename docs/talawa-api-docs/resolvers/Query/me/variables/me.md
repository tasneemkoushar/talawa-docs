[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Query/me](../README.md) / me

# Variable: me

\> `const` **me**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"me"`\]

This query fetch the current user from the database.

## Param

## Param

## Param

An object that contains `userId`.

## Returns

An object `currentUser` for the current user. If the user not found then it throws a `NotFoundError` error.

## Defined in

[src/resolvers/Query/me.ts:20](https://github.com/PalisadoesFoundation/talawa-api/blob/a6e7ac91b581c9109559657faf0f934f3eb41fe7/src/resolvers/Query/me.ts#L20)
