[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/acceptMembershipRequest](../README.md) / acceptMembershipRequest

# Variable: acceptMembershipRequest

\> `const` **acceptMembershipRequest**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"acceptMembershipRequest"`\]

This function accepts the membership request sent by a user.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. Whether the membership request exists or not.
2. Whether thr organization exists or not
3. Whether the user exists
4. whether currentUser with _id === context.userId is an admin of organization.
5. Whether user is already a member of organization.

## Defined in

[src/resolvers/Mutation/acceptMembershipRequest.ts:25](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/resolvers/Mutation/acceptMembershipRequest.ts#L25)
