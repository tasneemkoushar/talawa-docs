[**talawa-admin**](../../../../../README.md) • **Docs**

***

[talawa-admin](../../../../../modules.md) / [screens/UserPortal/Donate/Donate](../README.md) / default

# Function: default()

\> **default**(): `JSX.Element`

`donate` component allows users to make donations to an organization and view their previous donations.

This component fetches donation-related data using GraphQL queries and allows users to make donations
using a mutation. It supports currency selection, donation amount input, and displays a paginated list
of previous donations.

It includes:
- An input field for searching donations.
- A dropdown to select currency.
- An input field for entering donation amount.
- A button to submit the donation.
- A list of previous donations displayed in a paginated format.
- An organization sidebar for navigation.

### GraphQL Queries
- `ORGANIZATION_DONATION_CONNECTION_LIST`: Fetches the list of donations for the organization.
- `USER_ORGANIZATION_CONNECTION`: Fetches organization details.

### GraphQL Mutations
- `DONATE_TO_ORGANIZATION`: Performs the donation action.

## Returns

`JSX.Element`

The rendered component.

## Defined in

[src/screens/UserPortal/Donate/Donate.tsx:65](https://github.com/PalisadoesFoundation/talawa-admin/blob/7a991b3aa824070bd53d6367f1ce7f072321af88/src/screens/UserPortal/Donate/Donate.tsx#L65)
