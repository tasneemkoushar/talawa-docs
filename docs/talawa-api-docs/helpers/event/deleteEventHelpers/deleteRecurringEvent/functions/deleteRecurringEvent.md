[**talawa-api**](../../../../../README.md)

***

[talawa-api](../../../../../modules.md) / [helpers/event/deleteEventHelpers/deleteRecurringEvent](../README.md) / deleteRecurringEvent

# Function: deleteRecurringEvent()

\> **deleteRecurringEvent**(`args`, `event`, `session`): `Promise`\<`void`\>

Deletes instances of a recurring event based on the delete type specified.
Delete types include: thisInstance, allInstances, thisAndFollowingInstances.

## Parameters

### args

[`MutationRemoveEventArgs`](../../../../../types/generatedGraphQLTypes/type-aliases/MutationRemoveEventArgs.md)

Arguments containing details for the event deletion.

### event

[`InterfaceEvent`](../../../../../models/Event/interfaces/InterfaceEvent.md)

The instance of the recurring event to be deleted.

### session

`ClientSession`

The MongoDB client session for transactional operations.

## Returns

`Promise`\<`void`\>

## Remarks

This function follows these steps:
1. Retrieves the recurrence rule associated with the event.
2. Retrieves the base recurring event to which the event belongs.
3. If the event is an exception instance or deleting a single instance (`thisInstance`), deletes that specific instance.
4. If deleting all instances (`allInstances`), deletes all instances associated with the recurrence rule.
5. If deleting this and following instances (`thisAndFollowingInstances`), deletes all instances starting from the specified event instance.

## Defined in

[src/helpers/event/deleteEventHelpers/deleteRecurringEvent.ts:29](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/helpers/event/deleteEventHelpers/deleteRecurringEvent.ts#L29)
