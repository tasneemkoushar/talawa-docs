[**talawa-admin**](../../../../../../README.md) • **Docs**

***

[talawa-admin](../../../../../../modules.md) / [components/Advertisements/core/AdvertisementRegister/AdvertisementRegister](../README.md) / default

# Function: default()

\> **default**(`props`): `JSX.Element`

Component for registering or editing an advertisement.

## Parameters

• **props**: `InterfaceAddOnRegisterProps`

Contains form status, advertisement details, and a function to update parent state.

## Returns

`JSX.Element`

A JSX element that renders a form inside a modal for creating or editing an advertisement.

## Example

```tsx
\<AdvertisementRegister
  formStatus="register"
  setAfter=\{(value) =\> console.log(value)\}
/\>
```

## Defined in

[src/components/Advertisements/core/AdvertisementRegister/AdvertisementRegister.tsx:60](https://github.com/PalisadoesFoundation/talawa-admin/blob/7496bb3a4c3730e7e3caee73f8bf91c3031e4ae6/src/components/Advertisements/core/AdvertisementRegister/AdvertisementRegister.tsx#L60)
