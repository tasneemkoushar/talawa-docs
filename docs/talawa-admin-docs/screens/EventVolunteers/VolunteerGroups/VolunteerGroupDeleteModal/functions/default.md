[**talawa-admin**](../../../../../README.md) • **Docs**

***

[talawa-admin](../../../../../modules.md) / [screens/EventVolunteers/VolunteerGroups/VolunteerGroupDeleteModal](../README.md) / default

# Function: default()

\> **default**(`props`, `deprecatedLegacyContext`?): `ReactNode`

A modal dialog for confirming the deletion of a volunteer group.

## Parameters

• **props**: [`InterfaceDeleteVolunteerGroupModal`](../interfaces/InterfaceDeleteVolunteerGroupModal.md)

• **deprecatedLegacyContext?**: `any`

**Deprecated**

**See**

[React Docs](https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods)

## Returns

`ReactNode`

The rendered modal component.

The `VolunteerGroupDeleteModal` component displays a confirmation dialog when a user attempts to delete a volunteer group.
It allows the user to either confirm or cancel the deletion.
On confirmation, the `deleteVolunteerGroup` mutation is called to remove the volunteer group from the database,
and the `refetchGroups` function is invoked to update the list of volunteer groups.
A success or error toast notification is shown based on the result of the deletion operation.

The modal includes:
- A header with a title and a close button.
- A body with a message asking for confirmation.
- A footer with "Yes" and "No" buttons to confirm or cancel the deletion.

The `deleteVolunteerGroup` mutation is used to perform the deletion operation.

## Defined in

[src/screens/EventVolunteers/VolunteerGroups/VolunteerGroupDeleteModal.tsx:42](https://github.com/PalisadoesFoundation/talawa-admin/blob/7a991b3aa824070bd53d6367f1ce7f072321af88/src/screens/EventVolunteers/VolunteerGroups/VolunteerGroupDeleteModal.tsx#L42)
