[**talawa-admin**](../../../../../README.md) • **Docs**

***

[talawa-admin](../../../../../modules.md) / [screens/UserPortal/Pledges/Pledges](../README.md) / default

# Function: default()

\> **default**(): `Element`

The `Pledges` component is responsible for rendering a user's pledges within a campaign.
It fetches pledges data using Apollo Client's `useQuery` hook and displays the data
in a DataGrid with various features such as search, sorting, and modal dialogs for updating
or deleting a pledge. The component also handles various UI interactions including opening
modals for editing or deleting a pledge, showing additional pledgers in a popup, and
applying filters for searching pledges by campaign or pledger name.

Key functionalities include:
- Fetching pledges data from the backend using GraphQL query `USER_PLEDGES`.
- Displaying pledges in a table with columns for pledgers, associated campaigns,
  end dates, pledged amounts, and actions.
- Handling search and sorting of pledges.
- Opening and closing modals for updating and deleting pledges.
- Displaying additional pledgers in a popup when the list of pledgers exceeds a certain limit.

## Returns

`Element`

The rendered Pledges component.

## Defined in

[src/screens/UserPortal/Pledges/Pledges.tsx:69](https://github.com/PalisadoesFoundation/talawa-admin/blob/7a991b3aa824070bd53d6367f1ce7f072321af88/src/screens/UserPortal/Pledges/Pledges.tsx#L69)
