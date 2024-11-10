[**talawa-admin**](../../../../../../README.md) • **Docs**

***

[talawa-admin](../../../../../../modules.md) / [components/AddOn/core/AddOnRegister/AddOnRegister](../README.md) / default

# Function: default()

\> **default**(`__namedParameters`): `JSX.Element`

A React component for registering a new add-on plugin.

This component:
- Displays a button to open a modal for plugin registration.
- Contains a form in the modal for entering plugin details.
- Uses GraphQL mutation to register the plugin.
- Uses `react-i18next` for localization and `react-toastify` for notifications.
- Redirects to the organization list page if no `orgId` is found in the URL.

## Parameters

• **\_\_namedParameters**: `AddOnRegisterProps`

## Returns

`JSX.Element`

A JSX element containing the button and modal for plugin registration.

## Defined in

[src/components/AddOn/core/AddOnRegister/AddOnRegister.tsx:38](https://github.com/PalisadoesFoundation/talawa-admin/blob/9dd5d7fd647f8a7c9e1c1e14bf645b71b32c51c2/src/components/AddOn/core/AddOnRegister/AddOnRegister.tsx#L38)
