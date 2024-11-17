[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/UserTag/usersToAssignTo](../README.md) / usersToAssignTo

# Variable: usersToAssignTo

\> `const` **usersToAssignTo**: [`UserTagResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/UserTagResolvers.md)\[`"usersToAssignTo"`\]

Resolver function for the `usersToAssignTo` field of a `UserTag`.

## Param

The parent object representing the user tag. It contains information about the user tag, including the ID of the user tag.

## Param

The arguments provided to the field. These arguments are used to filter, sort, and paginate the users assigned to the user tag.

## Returns

A promise that resolves to a connection object containing the users assigned to the user tag.

## See

 - User - The User model used to interact with the users collection in the database.
 - parseGraphQLConnectionArguments - The function used to parse the GraphQL connection arguments (filter, sort, pagination).
 - transformToDefaultGraphQLConnection - The function used to transform the list of users assigned to the user tag into a connection object.
 - getGraphQLConnectionFilter - The function used to get the filter object for the GraphQL connection.
 - getCommonGraphQLConnectionSort - The function used to get the common sort object for the GraphQL connection.
 - MAXIMUM_FETCH_LIMIT - The maximum number of users that can be fetched in a single request.
 - GraphQLError - The error class used to throw GraphQL errors.
 - UserResolvers - The type definition for the resolvers of the UserTag fields.

## Defined in

[src/resolvers/UserTag/usersToAssignTo.ts:41](https://github.com/PalisadoesFoundation/talawa-api/blob/a6e7ac91b581c9109559657faf0f934f3eb41fe7/src/resolvers/UserTag/usersToAssignTo.ts#L41)
