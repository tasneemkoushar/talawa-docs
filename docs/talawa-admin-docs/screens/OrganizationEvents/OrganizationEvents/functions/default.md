[**talawa-admin**](../../../../README.md) • **Docs**

***

[talawa-admin](../../../../modules.md) / [screens/OrganizationEvents/OrganizationEvents](../README.md) / default

# Function: default()

\> **default**(): `JSX.Element`

Organization Events Page Component to display the events of an organization
and create new events for the organization by the admin or superadmin user.
The component uses the EventCalendar component to display the events and EventHeader component
 to display the view type and create event button.
 The component uses the RecurrenceOptions component to display the recurrence options for the event.
 The component uses the CREATE_EVENT_MUTATION mutation to create a new event for the organization.
 The component uses the ORGANIZATION_EVENT_CONNECTION_LIST and ORGANIZATIONS_LIST queries to fetch the events
 and organization details.
 The component uses the useLocalStorage hook to get the user details from the local storage.

## Returns

`JSX.Element`

JSX.Element to display the Organization Events Page

## Defined in

[src/screens/OrganizationEvents/OrganizationEvents.tsx:56](https://github.com/PalisadoesFoundation/talawa-admin/blob/7a991b3aa824070bd53d6367f1ce7f072321af88/src/screens/OrganizationEvents/OrganizationEvents.tsx#L56)
