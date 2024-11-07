[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Comment/creator](../README.md) / creator

# Variable: creator

\> `const` **creator**: [`CommentResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/CommentResolvers.md)\[`"creator"`\]

Resolver function for the `creator` field of a `Comment`.

This function retrieves the user who created a specific comment.

## Param

The parent object representing the comment. It contains information about the comment, including the ID of the user who created it.

## Returns

A promise that resolves to the user document found in the database. This document represents the user who created the comment.

## See

 - User - The User model used to interact with the users collection in the database.
 - CommentResolvers - The type definition for the resolvers of the Comment fields.

## Defined in

[src/resolvers/Comment/creator.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/bba5d82264abb62b9e358a3d3fe1af18a8a8f6e4/src/resolvers/Comment/creator.ts#L16)
