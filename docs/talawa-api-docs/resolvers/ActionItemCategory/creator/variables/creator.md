[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/ActionItemCategory/creator](../README.md) / creator

# Variable: creator

\> `const` **creator**: [`ActionItemCategoryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/ActionItemCategoryResolvers.md)\[`"creator"`\]

Resolver function for the `creator` field of an `ActionItemCategory`.

This function retrieves the user who created a specific action item category.

## Param

The parent object representing the action item category. It contains information about the action item category, including the ID of the user who created it.

## Returns

A promise that resolves to the user document found in the database. This document represents the user who created the action item category.

## See

 - User - The User model used to interact with the users collection in the database.
 - ActionItemCategoryResolvers - The type definition for the resolvers of the ActionItemCategory fields.

## Defined in

[src/resolvers/ActionItemCategory/creator.ts:15](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/resolvers/ActionItemCategory/creator.ts#L15)
