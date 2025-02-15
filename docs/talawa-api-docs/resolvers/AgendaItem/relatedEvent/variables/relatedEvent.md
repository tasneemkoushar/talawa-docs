[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/AgendaItem/relatedEvent](../README.md) / relatedEvent

# Variable: relatedEvent

\> `const` **relatedEvent**: [`AgendaItemResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/AgendaItemResolvers.md)\[`"relatedEvent"`\]

Resolver function for the `relatedEvent` field of an `AgendaItem`.

This function retrieves the event related to a specific agenda item.

## Param

The parent object representing the agenda item. It contains information about the agenda item, including the ID of the related event.

## Returns

A promise that resolves to the event document found in the database. This document represents the event related to the agenda item.

## See

 - Event - The Event model used to interact with the events collection in the database.
 - AgendaItemResolvers - The type definition for the resolvers of the AgendaItem fields.

## Defined in

[src/resolvers/AgendaItem/relatedEvent.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/resolvers/AgendaItem/relatedEvent.ts#L16)
