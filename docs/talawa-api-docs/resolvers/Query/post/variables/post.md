[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Query/post](../README.md) / post

# Variable: post

\> `const` **post**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"post"`\]

This query will fetch the specified Post from the database.

## Param

## Param

An object that contains `id` of the Post.

## Returns

An object `post`. If the `appLanguageCode` field not found then it throws a `NotFoundError` error.

## Defined in

[src/resolvers/Query/post.ts:11](https://github.com/PalisadoesFoundation/talawa-api/blob/f4877b986932181336f42a7336754de05976cd97/src/resolvers/Query/post.ts#L11)
