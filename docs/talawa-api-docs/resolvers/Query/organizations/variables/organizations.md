[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Query/organizations](../README.md) / organizations

# Variable: organizations

\> `const` **organizations**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"organizations"`\]

If a 'id' is specified, this query will return an organisation;
otherwise, it will return all organisations with a size of limit 100.

## Param

## Param

An object containing `orderBy` and `id` of the Organization.

## Returns

The organization if valid `id` is provided else return organizations with size limit 100.

## Remarks

`id` in the args is optional.

## Defined in

[src/resolvers/Query/organizations.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/92443bb6a5ff3ed66457149a509401986a82e570/src/resolvers/Query/organizations.ts#L16)
