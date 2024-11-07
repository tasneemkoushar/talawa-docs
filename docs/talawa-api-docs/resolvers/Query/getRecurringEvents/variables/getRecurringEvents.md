[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Query/getRecurringEvents](../README.md) / getRecurringEvents

# Variable: getRecurringEvents

\> `const` **getRecurringEvents**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"getRecurringEvents"`\]

This query will fetch all the events with the same BaseRecurringEventId from the database.

## Param

## Param

An object that contains `baseRecurringEventId` of the base recurring event.

## Returns

An array of `Event` objects that are instances of the base recurring event.

## Defined in

[src/resolvers/Query/getRecurringEvents.ts:11](https://github.com/PalisadoesFoundation/talawa-api/blob/bba5d82264abb62b9e358a3d3fe1af18a8a8f6e4/src/resolvers/Query/getRecurringEvents.ts#L11)
