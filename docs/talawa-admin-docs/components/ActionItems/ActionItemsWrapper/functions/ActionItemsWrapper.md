[**talawa-admin**](../../../../README.md) • **Docs**

***

[talawa-admin](../../../../modules.md) / [components/ActionItems/ActionItemsWrapper](../README.md) / ActionItemsWrapper

# Function: ActionItemsWrapper()

\> **ActionItemsWrapper**(`__namedParameters`): `Element`

A React functional component that provides a button to open a modal for viewing and managing action items related to a specific event.

This component displays a button that, when clicked, opens a modal dialog (`ActionItemsModal`). The modal allows users to interact with action items specific to the organization and event IDs passed as props.

## Parameters

• **\_\_namedParameters**: `PropType`

## Returns

`Element`

The JSX element representing the action items button and modal.

## Example

```tsx
\<ActionItemsWrapper orgId="12345" eventId="67890" /\>
```
This example renders the `ActionItemsWrapper` component for an organization with ID "12345" and an event with ID "67890". The button will open a modal for managing action items related to this event.

## Defined in

[src/components/ActionItems/ActionItemsWrapper.tsx:30](https://github.com/PalisadoesFoundation/talawa-admin/blob/7496bb3a4c3730e7e3caee73f8bf91c3031e4ae6/src/components/ActionItems/ActionItemsWrapper.tsx#L30)
