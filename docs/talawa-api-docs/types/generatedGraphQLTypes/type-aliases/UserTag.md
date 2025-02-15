[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / UserTag

# Type Alias: UserTag

\> **UserTag**: `object`

## Type declaration

### \_\_typename?

\> `optional` **\_\_typename**: `"UserTag"`

### \_id

\> **\_id**: [`Scalars`](Scalars.md)\[`"ID"`\]\[`"output"`\]

A field to get the mongodb object id identifier for this UserTag.

### ancestorTags?

\> `optional` **ancestorTags**: [`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`UserTag`](UserTag.md)\>[]\>

A field to traverse the ancestor tags of this UserTag.

### childTags?

\> `optional` **childTags**: [`Maybe`](Maybe.md)\<[`UserTagsConnection`](UserTagsConnection.md)\>

A connection field to traverse a list of UserTag this UserTag is a
parent to.

### name

\> **name**: [`Scalars`](Scalars.md)\[`"String"`\]\[`"output"`\]

A field to get the name of this UserTag.

### organization?

\> `optional` **organization**: [`Maybe`](Maybe.md)\<[`Organization`](Organization.md)\>

A field to traverse the Organization that created this UserTag.

### parentTag?

\> `optional` **parentTag**: [`Maybe`](Maybe.md)\<[`UserTag`](UserTag.md)\>

A field to traverse the parent UserTag of this UserTag.

### usersAssignedTo?

\> `optional` **usersAssignedTo**: [`Maybe`](Maybe.md)\<[`UsersConnection`](UsersConnection.md)\>

A connection field to traverse a list of User this UserTag is assigned
to.

### usersToAssignTo?

\> `optional` **usersToAssignTo**: [`Maybe`](Maybe.md)\<[`UsersConnection`](UsersConnection.md)\>

A connection field to traverse a list of Users this UserTag is not assigned
to, to see and select among them and assign this tag.

## Defined in

[src/types/generatedGraphQLTypes.ts:3116](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/types/generatedGraphQLTypes.ts#L3116)
