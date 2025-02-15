[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/blockPluginCreationBySuperadmin](../README.md) / blockPluginCreationBySuperadmin

# Variable: blockPluginCreationBySuperadmin

\> `const` **blockPluginCreationBySuperadmin**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"blockPluginCreationBySuperadmin"`\]

Allows a superadmin to enable or disable plugin creation for a specific user.

This function performs several checks:

1. Verifies if the current user exists.
2. Ensures that the current user has an associated app user profile.
3. Confirms that the current user is a superadmin.
4. Checks if the target user exists and updates their `pluginCreationAllowed` field based on the provided value.

## Param

The parent object for the mutation (not used in this function).

## Param

The arguments provided with the request, including:
  - `userId`: The ID of the user whose plugin creation permissions are being modified.
  - `blockUser`: A boolean indicating whether to block (`true`) or allow (`false`) plugin creation for the user.

## Param

The context of the entire application, including user information and other context-specific data.

## Returns

A promise that resolves to the updated user app profile object with the new `pluginCreationAllowed` value.

## Defined in

[src/resolvers/Mutation/blockPluginCreationBySuperadmin.ts:34](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/resolvers/Mutation/blockPluginCreationBySuperadmin.ts#L34)
