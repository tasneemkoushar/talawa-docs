[**talawa-admin**](../../../../README.md) • **Docs**

***

[talawa-admin](../../../../modules.md) / [screens/FundCampaignPledge/PledgeModal](../README.md) / default

# Function: default()

\> **default**(`props`, `deprecatedLegacyContext`?): `ReactNode`

A modal dialog for creating or editing a pledge.

## Parameters

• **props**: [`InterfacePledgeModal`](../interfaces/InterfacePledgeModal.md)

• **deprecatedLegacyContext?**: `any`

**Deprecated**

**See**

[React Docs](https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods)

## Returns

`ReactNode`

The rendered modal component.

The `PledgeModal` component displays a form within a modal dialog for creating or editing a pledge.
It includes fields for selecting users, entering an amount, choosing a currency, and setting start and end dates for the pledge.

The modal includes:
- A header with a title indicating the current mode (create or edit) and a close button.
- A form with:
  - A multi-select dropdown for selecting users to participate in the pledge.
  - Date pickers for selecting the start and end dates of the pledge.
  - A dropdown for selecting the currency of the pledge amount.
  - An input field for entering the pledge amount.
- A submit button to create or update the pledge.

On form submission, the component either:
- Calls `updatePledge` mutation to update an existing pledge, or
- Calls `createPledge` mutation to create a new pledge.

Success or error messages are displayed using toast notifications based on the result of the mutation.

## Defined in

[src/screens/FundCampaignPledge/PledgeModal.tsx:72](https://github.com/PalisadoesFoundation/talawa-admin/blob/7a991b3aa824070bd53d6367f1ce7f072321af88/src/screens/FundCampaignPledge/PledgeModal.tsx#L72)
