[**talawa-admin**](../../../../../README.md) • **Docs**

***

[talawa-admin](../../../../../modules.md) / [screens/EventVolunteers/Volunteers/VolunteerCreateModal](../README.md) / default

# Function: default()

\> **default**(`props`, `deprecatedLegacyContext`?): `ReactNode`

A modal dialog for add a volunteer for an event.

## Parameters

• **props**: [`InterfaceVolunteerCreateModal`](../interfaces/InterfaceVolunteerCreateModal.md)

• **deprecatedLegacyContext?**: `any`

**Deprecated**

**See**

[React Docs](https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods)

## Returns

`ReactNode`

The rendered modal component.

The `VolunteerCreateModal` component displays a form within a modal dialog for adding a volunteer.
It includes fields for selecting user.

The modal includes:
- A header with a title and a close button.
- A form with:
- A multi-select dropdown for selecting user be added as volunteer.
- A submit button to create or update the pledge.

On form submission, the component:
- Calls `addVolunteer` mutation to add a new Volunteer.

Success or error messages are displayed using toast notifications based on the result of the mutation.

## Defined in

[src/screens/EventVolunteers/Volunteers/VolunteerCreateModal.tsx:48](https://github.com/PalisadoesFoundation/talawa-admin/blob/7a991b3aa824070bd53d6367f1ce7f072321af88/src/screens/EventVolunteers/Volunteers/VolunteerCreateModal.tsx#L48)
