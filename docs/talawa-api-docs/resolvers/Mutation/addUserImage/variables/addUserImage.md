[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/addUserImage](../README.md) / addUserImage

# Variable: addUserImage

\> `const` **addUserImage**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"addUserImage"`\]

Mutation resolver function to add or update a user's profile image.

This function performs the following actions:
1. Retrieves the current user from the cache or database based on the `userId` from the context.
2. Checks if the current user exists. If not, throws a not found error.
3. Uploads the provided encoded image file and updates the user's profile image with the new file path.
4. Updates the user document in the database with the new image information.
5. Caches the updated user data.

## Param

The parent object for the mutation. Typically, this is not used in this resolver.

## Param

The arguments for the mutation, including:
  - `file`: The encoded image file to be uploaded.

## Param

The context for the mutation, including:
  - `userId`: The ID of the current user making the request.

## Returns

A promise that resolves to the updated user document with the new image.

## See

 - User - The User model used to interact with the users collection in the database.
 - MutationResolvers - The type definition for the mutation resolvers.
 - uploadEncodedImage - Utility function to handle the upload of an encoded image file.
 - cacheUsers - Service function to cache the updated user data.
 - findUserInCache - Service function to retrieve users from cache.

## Remarks

The function first attempts to retrieve the user from the cache using `findUserInCache`.
If the user is not found in the cache, it queries the database.
It then performs the image upload and updates the user's profile image before saving the changes to the database.

## Defined in

[src/resolvers/Mutation/addUserImage.ts:39](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/resolvers/Mutation/addUserImage.ts#L39)
