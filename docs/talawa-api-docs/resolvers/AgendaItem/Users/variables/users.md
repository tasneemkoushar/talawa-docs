[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/AgendaItem/Users](../README.md) / users

# Variable: users

\> `const` **users**: [`AgendaItemResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/AgendaItemResolvers.md)\[`"users"`\]

Resolver function for the `users` field of an `AgendaItem`.

This function retrieves the users associated with a specific agenda item.

## Param

The parent object representing the agenda item. It contains information about the agenda item, including the IDs of the users associated with it.

## Returns

A promise that resolves to the user documents found in the database. These documents represent the users associated with the agenda item.

## See

 - User - The User model used to interact with the users collection in the database.
 - AgendaItemResolvers - The type definition for the resolvers of the AgendaItem fields.

## Defined in

[src/resolvers/AgendaItem/Users.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/resolvers/AgendaItem/Users.ts#L16)
