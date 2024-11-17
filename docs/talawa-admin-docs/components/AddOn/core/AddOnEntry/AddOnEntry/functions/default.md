[**talawa-admin**](../../../../../../README.md) • **Docs**

***

[talawa-admin](../../../../../../modules.md) / [components/AddOn/core/AddOnEntry/AddOnEntry](../README.md) / default

# Function: default()

\> **default**(`props`): `JSX.Element`

A React component that represents an add-on entry, displaying its details and allowing installation or uninstallation.

## Parameters

• **props**: `InterfaceAddOnEntryProps`

The properties for the component.

## Returns

`JSX.Element`

A JSX element containing the add-on entry.

## Example

```tsx
\<AddOnEntry
  id="1"
  enabled=\{true\}
  title="Sample Add-On"
  description="This is a sample add-on."
  createdBy="Author Name"
  component="SampleComponent"
  modified=\{new Date()\}
  uninstalledOrgs=\{['org1', 'org2']\}
  getInstalledPlugins=\{() =\> \{\}\}
/\>
```

## Defined in

[src/components/AddOn/core/AddOnEntry/AddOnEntry.tsx:46](https://github.com/PalisadoesFoundation/talawa-admin/blob/d16b95ee179900e8e32a2296f14e948e6caea05b/src/components/AddOn/core/AddOnEntry/AddOnEntry.tsx#L46)
