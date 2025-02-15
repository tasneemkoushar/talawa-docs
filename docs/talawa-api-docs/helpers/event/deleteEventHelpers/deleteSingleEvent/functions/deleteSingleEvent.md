[**talawa-api**](../../../../../README.md)

***

[talawa-api](../../../../../modules.md) / [helpers/event/deleteEventHelpers/deleteSingleEvent](../README.md) / deleteSingleEvent

# Function: deleteSingleEvent()

\> **deleteSingleEvent**(`eventId`, `session`, `recurrenceRule`?, `baseRecurringEvent`?): `Promise`\<`void`\>

Deletes a single event.

## Parameters

### eventId

`string`

The ID of the event to be deleted.

### session

`ClientSession`

The MongoDB client session for transactional operations.

### recurrenceRule?

`string`

Optional ID of the recurrence rule associated with the event (for recurring events).

### baseRecurringEvent?

`string`

Optional ID of the base recurring event (for recurring events).

## Returns

`Promise`\<`void`\>

## Remarks

This function performs the following steps:
1. Removes all associations (attendees, users, profiles, action items) related to the event.
2. Deletes the event document itself.
3. If provided, removes any dangling documents related to the recurrence rule and base recurring event.

## Defined in

[src/helpers/event/deleteEventHelpers/deleteSingleEvent.ts:25](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/helpers/event/deleteEventHelpers/deleteSingleEvent.ts#L25)
