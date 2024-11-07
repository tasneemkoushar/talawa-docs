[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [services/OrganizationCache/deleteOrganizationFromCache](../README.md) / deleteOrganizationFromCache

# Function: deleteOrganizationFromCache()

\> **deleteOrganizationFromCache**(`organization`): `Promise`\<`void`\>

Deletes the specified organization from Redis cache.

## Parameters

• **organization**: [`InterfaceOrganization`](../../../../models/Organization/interfaces/InterfaceOrganization.md)

The InterfaceOrganization object representing the organization to delete.

## Returns

`Promise`\<`void`\>

A promise resolving to void.

## Defined in

[src/services/OrganizationCache/deleteOrganizationFromCache.ts:10](https://github.com/PalisadoesFoundation/talawa-api/blob/bba5d82264abb62b9e358a3d3fe1af18a8a8f6e4/src/services/OrganizationCache/deleteOrganizationFromCache.ts#L10)
