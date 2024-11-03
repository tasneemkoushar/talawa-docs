[**talawa-admin**](../../../../README.md) • **Docs**

***

[talawa-admin](../../../../modules.md) / [components/Venues/VenueCard](../README.md) / default

# Function: default()

\> **default**(`__namedParameters`): `Element`

Represents a card component displaying venue information.

This component renders a card with the venue's image, name, capacity, and description.
It also provides buttons to edit or delete the venue.

## Parameters

• **\_\_namedParameters**: `InterfaceVenueCardProps`

## Returns

`Element`

JSX.Element - The `VenueCard` component.

## Example

```tsx
\<VenueCard
  venueItem=\{venue\}
  index=\{0\}
  showEditVenueModal=\{handleShowEditVenueModal\}
  handleDelete=\{handleDeleteVenue\}
/\>
```

## Defined in

[src/components/Venues/VenueCard.tsx:39](https://github.com/PalisadoesFoundation/talawa-admin/blob/c49a58cefb47697eb25ed53aa1ef6d685c772d3e/src/components/Venues/VenueCard.tsx#L39)
