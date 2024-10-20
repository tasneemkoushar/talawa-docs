[**talawa-admin**](../../../../README.md) • **Docs**

***

[talawa-admin](../../../../modules.md) / [components/AgendaCategory/AgendaCategoryContainer](../README.md) / default

# Function: default()

\> **default**(`props`): `JSX.Element`

Component for displaying and managing agenda item categories.

## Parameters

• **props**

Contains agenda category data and functions for data management.

• **props.agendaCategoryConnection**: `"Organization"`

• **props.agendaCategoryData**: `undefined` \| `InterfaceAgendaItemCategoryInfo`[]

• **props.agendaCategoryRefetch**

## Returns

`JSX.Element`

A JSX element that renders agenda item categories with options to preview, edit, and delete.

## Example

```tsx
\<AgendaCategoryContainer
  agendaCategoryConnection="Organization"
  agendaCategoryData=\{data\}
  agendaCategoryRefetch=\{refetch\}
/\>
```

## Defined in

[src/components/AgendaCategory/AgendaCategoryContainer.tsx:34](https://github.com/PalisadoesFoundation/talawa-admin/blob/7496bb3a4c3730e7e3caee73f8bf91c3031e4ae6/src/components/AgendaCategory/AgendaCategoryContainer.tsx#L34)
