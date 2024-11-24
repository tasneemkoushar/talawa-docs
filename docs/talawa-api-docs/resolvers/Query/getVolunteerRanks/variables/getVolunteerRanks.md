[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Query/getVolunteerRanks](../README.md) / getVolunteerRanks

# Variable: getVolunteerRanks

\> `const` **getVolunteerRanks**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"getVolunteerRanks"`\]

This query will fetch volunteer ranks based on the provided time frame (allTime, weekly, monthly, yearly),
and it will filter the results based on an array of volunteer IDs.

## Param

parent of the current request

## Param

An object that contains where object for volunteer ranks.

## Returns

An array of `VolunteerRank` object.

## Defined in

[src/resolvers/Query/getVolunteerRanks.ts:14](https://github.com/PalisadoesFoundation/talawa-api/blob/92443bb6a5ff3ed66457149a509401986a82e570/src/resolvers/Query/getVolunteerRanks.ts#L14)
