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

[src/resolvers/Query/getRecurringEvents.ts:11](https://github.com/PalisadoesFoundation/talawa-api/blob/a6e7ac91b581c9109559657faf0f934f3eb41fe7/src/resolvers/Query/getRecurringEvents.ts#L11)
