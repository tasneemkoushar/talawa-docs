[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/AgendaSection/createdBy](../README.md) / createdBy

# Variable: createdBy

\> `const` **createdBy**: [`AgendaSectionResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/AgendaSectionResolvers.md)\[`"createdBy"`\]

Resolver function for the `createdBy` field of an `AgendaSection`.

This function retrieves the user who created a specific agenda section.

## Param

The parent object representing the agenda section. It contains information about the agenda section, including the ID of the user who created it.

## Returns

A promise that resolves to the user document found in the database. This document represents the user who created the agenda section.

## See

 - User - The User model used to interact with the users collection in the database.
 - AgendaSectionResolvers - The type definition for the resolvers of the AgendaSection fields.

## Defined in

[src/resolvers/AgendaSection/createdBy.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/bba5d82264abb62b9e358a3d3fe1af18a8a8f6e4/src/resolvers/AgendaSection/createdBy.ts#L16)
