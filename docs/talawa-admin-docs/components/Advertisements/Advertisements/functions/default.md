[**talawa-admin**](../../../../README.md) • **Docs**

***

[talawa-admin](../../../../modules.md) / [components/Advertisements/Advertisements](../README.md) / default

# Function: default()

\> **default**(): `JSX.Element`

The `Advertisements` component displays a list of advertisements for a specific organization.
It uses a tab-based interface to toggle between active and archived advertisements.

The component utilizes the `useQuery` hook from Apollo Client to fetch advertisements data
and implements infinite scrolling to load more advertisements as the user scrolls.

## Returns

`JSX.Element`

## Example

```ts
return (
  \<Advertisements /\>
)
```

## Defined in

[src/components/Advertisements/Advertisements.tsx:27](https://github.com/PalisadoesFoundation/talawa-admin/blob/6393648179f5fe59037f42564a6a7bc1ca4e7f9d/src/components/Advertisements/Advertisements.tsx#L27)
