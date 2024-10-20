[**talawa-admin**](../../../../README.md) • **Docs**

***

[talawa-admin](../../../../modules.md) / [components/ActionItems/ActionItemsModal](../README.md) / ActionItemsModal

# Function: ActionItemsModal()

\> **ActionItemsModal**(`props`): `Element`

ActionItemsModal component displays a modal containing action items for a specific event within an organization.
It includes a header with a title and a body that renders the ActionItemsModalBody component.

## Parameters

• **props**: [`InterfaceModalProp`](../interfaces/InterfaceModalProp.md)

The props for the ActionItemsModal component.

## Returns

`Element`

## Example

```tsx
\<ActionItemsModal
  show=\{true\}
  eventId="event123"
  orgId="org456"
  handleClose=\{() =\> setShowModal(false)\}
/\>
```
This example renders the `ActionItemsModal` component with the modal shown, using specific event and organization IDs, and a function to handle closing the modal.

## Defined in

[src/components/ActionItems/ActionItemsModal.tsx:39](https://github.com/PalisadoesFoundation/talawa-admin/blob/7496bb3a4c3730e7e3caee73f8bf91c3031e4ae6/src/components/ActionItems/ActionItemsModal.tsx#L39)
