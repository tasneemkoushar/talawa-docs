[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/CheckIn/event](../README.md) / event

# Variable: event

\> `const` **event**: [`CheckInResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/CheckInResolvers.md)\[`"event"`\]

Resolver function for the `event` field of a `CheckIn`.

This function retrieves the event associated with a specific check-in.

## Param

The parent object representing the check-in. It contains information about the check-in, including the ID of the event attendee it is associated with.

## Returns

A promise that resolves to the event document found in the database. This document represents the event associated with the check-in.

## See

 - EventAttendee - The EventAttendee model used to interact with the event attendees collection in the database.
 - CheckInResolvers - The type definition for the resolvers of the CheckIn fields.

## Defined in

[src/resolvers/CheckIn/event.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/resolvers/CheckIn/event.ts#L16)
