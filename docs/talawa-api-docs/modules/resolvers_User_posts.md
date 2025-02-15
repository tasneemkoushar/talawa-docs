[talawa-api](../README.md) / [Exports](../modules.md) / resolvers/User/posts

# Module: resolvers/User/posts

## Table of contents

### Variables

- [posts](resolvers_User_posts.md#posts)

### Functions

- [parseCursor](resolvers_User_posts.md#parsecursor)

## Variables

### posts

• `Const` **posts**: [`UserResolvers`](types_generatedGraphQLTypes.md#userresolvers)[``"posts"``]

Resolver function to fetch and return posts created by a user from the database.
This function implements cursor-based pagination using GraphQL connection arguments.

**`Param`**

An object that is the return value of the resolver for this field's parent.

**`Param`**

Arguments passed to the resolver. These should include pagination arguments such as `first`, `last`, `before`, and `after`.

**`Throws`**

GraphQLError Throws an error if the provided arguments are invalid.

#### Defined in

[src/resolvers/User/posts.ts:30](https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/resolvers/User/posts.ts#L30)

## Functions

### parseCursor

▸ **parseCursor**(`args`): [`ParseGraphQLConnectionCursorResult`](utilities_graphQLConnection_parseGraphQLConnectionArguments.md#parsegraphqlconnectioncursorresult)\<`string`\>

This function is used to validate and transform the cursor passed to the `posts` connection resolver.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`ParseGraphQLConnectionCursorArguments`](utilities_graphQLConnection_parseGraphQLConnectionArguments.md#parsegraphqlconnectioncursorarguments) & \{ `creatorId`: `string` \| `ObjectId`  \} | An object that includes the cursor value, cursor name, cursor path, and the ID of the creator. |

#### Returns

[`ParseGraphQLConnectionCursorResult`](utilities_graphQLConnection_parseGraphQLConnectionArguments.md#parsegraphqlconnectioncursorresult)\<`string`\>

A Promise that resolves to an object that includes a boolean indicating whether the operation was successful, and the parsed cursor value. If the operation was not successful, the object also includes an array of errors.

**`Throws`**

Error Throws an error if the provided cursor is invalid.

#### Defined in

[src/resolvers/User/posts.ts:102](https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/resolvers/User/posts.ts#L102)
