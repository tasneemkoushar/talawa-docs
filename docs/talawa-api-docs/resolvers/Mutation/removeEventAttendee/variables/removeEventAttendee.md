[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/removeEventAttendee](../README.md) / removeEventAttendee

# Variable: removeEventAttendee

\> `const` **removeEventAttendee**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"removeEventAttendee"`\]

Removes a user from the list of attendees for a specific event.

This function manages the removal of an event attendee by first verifying
the current user's authorization and the existence of the event. It checks
if the user making the request is either a super admin or an admin of the event,
and if the user to be removed is indeed registered as an attendee for the event.
If all checks pass, the user is removed from the event's attendee list.

## Param

This is an unused parameter representing the parent resolver in the GraphQL schema. It can be ignored.

## Param

Contains the arguments passed to the GraphQL mutation, specifically the event ID and user ID of the attendee to be removed.

## Param

Provides contextual information, including the current user's ID. This is used to authenticate and authorize the request.

## Returns

The details of the removed user if the removal was successful.

## Defined in

[src/resolvers/Mutation/removeEventAttendee.ts:38](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/resolvers/Mutation/removeEventAttendee.ts#L38)
