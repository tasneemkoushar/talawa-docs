[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [utilities/createSampleOrganizationUtil](../README.md) / generateUserData

# Function: generateUserData()

\> **generateUserData**(`organizationId`, `userType`): `Promise`\<`object`\>

Generates user data for a given organization and user type.

## Parameters

### organizationId

`string`

The ID of the organization the user belongs to

### userType

`string`

The type of the user ('ADMIN' or 'USER')

## Returns

`Promise`\<`object`\>

A promise that resolves to an object containing the created user and their application profile

### appUserProfile

\> **appUserProfile**: `Document`\<`unknown`, `object`, [`InterfaceAppUserProfile`](../../../models/AppUserProfile/interfaces/InterfaceAppUserProfile.md)\> & [`InterfaceAppUserProfile`](../../../models/AppUserProfile/interfaces/InterfaceAppUserProfile.md) & `Required`\<`object`\>

### user

\> **user**: `Document`\<`unknown`, `object`, [`InterfaceUser`](../../../models/User/interfaces/InterfaceUser.md)\> & [`InterfaceUser`](../../../models/User/interfaces/InterfaceUser.md) & `Required`\<`object`\>

## Defined in

[src/utilities/createSampleOrganizationUtil.ts:24](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/utilities/createSampleOrganizationUtil.ts#L24)
