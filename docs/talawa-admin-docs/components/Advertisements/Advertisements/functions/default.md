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

[src/components/Advertisements/Advertisements.tsx:27](https://github.com/PalisadoesFoundation/talawa-admin/blob/c49a58cefb47697eb25ed53aa1ef6d685c772d3e/src/components/Advertisements/Advertisements.tsx#L27)
