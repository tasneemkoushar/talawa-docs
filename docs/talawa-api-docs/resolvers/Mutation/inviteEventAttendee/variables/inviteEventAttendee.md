[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/inviteEventAttendee](../README.md) / inviteEventAttendee

# Variable: inviteEventAttendee

\> `const` **inviteEventAttendee**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"inviteEventAttendee"`\]

Invites an attendee to an event.

This resolver function facilitates the invitation process for an attendee to participate in an event.
It ensures the current user's authorization, validates the existence of the event, and manages the invitation status
to prevent duplicate invitations.

## Param

The parent resolver.

## Param

Arguments containing data for the invitation, including the eventId and userId.

## Param

Context object providing information about the current user.

## Returns

Promise resolving to the invited user data.

## Throws

NotFoundError if the user or event is not found.

## Throws

UnauthorizedError if the current user lacks authorization to invite attendees.

## Throws

ConflictError if the user is already invited to the event.

## Defined in

[src/resolvers/Mutation/inviteEventAttendee.ts:40](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/resolvers/Mutation/inviteEventAttendee.ts#L40)
