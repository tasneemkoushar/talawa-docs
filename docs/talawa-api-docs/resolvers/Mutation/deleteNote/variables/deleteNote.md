[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/deleteNote](../README.md) / deleteNote

# Variable: deleteNote

\> `const` **deleteNote**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"deleteNote"`\]

This function deletes a note.

## Param

parent of the current request

## Param

payload provided with the request

## Param

context of the entire application

## Returns

ID of the deleted note.

## Throws

NotFoundError if the user or note is not found

## Throws

UnauthorizedError if the user is not the creator of the note.

## Defined in

[src/resolvers/Mutation/deleteNote.ts:25](https://github.com/PalisadoesFoundation/talawa-api/blob/4a88fe62b20ebda9653c55ae8d39d6c6fac8831f/src/resolvers/Mutation/deleteNote.ts#L25)
