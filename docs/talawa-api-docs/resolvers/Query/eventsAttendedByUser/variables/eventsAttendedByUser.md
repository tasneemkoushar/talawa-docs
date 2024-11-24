[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Query/eventsAttendedByUser](../README.md) / eventsAttendedByUser

# Variable: eventsAttendedByUser

\> `const` **eventsAttendedByUser**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"eventsAttendedByUser"`\]

This query will fetch all the events for which user attended from the database.

## Param

## Param

An object that contains `id` of the user and `orderBy`.

## Returns

An object that contains the Event data.

## Remarks

The query function uses `getSort()` function to sort the data in specified.

## Defined in

[src/resolvers/Query/eventsAttendedByUser.ts:12](https://github.com/PalisadoesFoundation/talawa-api/blob/92443bb6a5ff3ed66457149a509401986a82e570/src/resolvers/Query/eventsAttendedByUser.ts#L12)
