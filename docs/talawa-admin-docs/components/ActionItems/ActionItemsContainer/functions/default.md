[**talawa-admin**](../../../../README.md) • **Docs**

***

[talawa-admin](../../../../modules.md) / [components/ActionItems/ActionItemsContainer](../README.md) / default

# Function: default()

\> **default**(`__namedParameters`): `JSX.Element`

ActionItemsContainer component is responsible for displaying, managing, and updating action items
related to either an organization or an event. It provides a UI for previewing, updating, and deleting
action items, as well as changing their status.

## Parameters

• **\_\_namedParameters**

• **\_\_namedParameters.actionItemsConnection**: `"Organization"` \| `"Event"`

• **\_\_namedParameters.actionItemsData**: `undefined` \| `InterfaceActionItemInfo`[]

• **\_\_namedParameters.actionItemsRefetch**

• **\_\_namedParameters.membersData**: `undefined` \| `InterfaceMemberInfo`[]

## Returns

`JSX.Element`

## Example

```tsx
\<ActionItemsContainer
  actionItemsConnection="Organization"
  actionItemsData=\{actionItems\}
  membersData=\{members\}
  actionItemsRefetch=\{refetchActionItems\}
/\>
```
This example renders the `ActionItemsContainer` component with organization connection, providing the necessary action items and members data along with a refetch function.

## Defined in

[src/components/ActionItems/ActionItemsContainer.tsx:54](https://github.com/PalisadoesFoundation/talawa-admin/blob/7496bb3a4c3730e7e3caee73f8bf91c3031e4ae6/src/components/ActionItems/ActionItemsContainer.tsx#L54)
