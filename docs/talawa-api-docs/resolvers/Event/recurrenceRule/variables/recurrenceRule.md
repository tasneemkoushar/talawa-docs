[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Event/recurrenceRule](../README.md) / recurrenceRule

# Variable: recurrenceRule

\> `const` **recurrenceRule**: [`EventResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/EventResolvers.md)\[`"recurrenceRule"`\]

Resolver function for the `recurrenceRule` field of an `Event`.

This function retrieves the recurrence rule associated with a specific event.

## Param

The parent object representing the event. It contains information about the event, including the ID of the recurrence rule associated with it.

## Returns

A promise that resolves to the recurrence rule document found in the database. This document represents the recurrence rule associated with the event.

## See

 - RecurrenceRule - The RecurrenceRule model used to interact with the recurrence rules collection in the database.
 - EventResolvers - The type definition for the resolvers of the Event fields.

## Defined in

[src/resolvers/Event/recurrenceRule.ts:17](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/resolvers/Event/recurrenceRule.ts#L17)
