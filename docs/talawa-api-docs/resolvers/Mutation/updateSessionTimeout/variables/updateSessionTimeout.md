[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/updateSessionTimeout](../README.md) / updateSessionTimeout

# Variable: updateSessionTimeout

\> `const` **updateSessionTimeout**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"updateSessionTimeout"`\]

This function updates the session timeout and can only be performed by superadmin users.

## Param

parent of the current request

## Param

payload provided with the request, including organizationId and timeout

## Param

context of the entire application, containing user information

## Returns

- A message true if the organization timeout is updated successfully

## Throws

- NotFoundError: If the user, appuserprofile or organization is not found

## Throws

- ValidationError: If the user is not an admin or superadmin, or if the timeout is outside the valid range

## Throws

- InternalServerError: If there is an error updating the organization timeout

## Defined in

[src/resolvers/Mutation/updateSessionTimeout.ts:28](https://github.com/PalisadoesFoundation/talawa-api/blob/bba5d82264abb62b9e358a3d3fe1af18a8a8f6e4/src/resolvers/Mutation/updateSessionTimeout.ts#L28)
