[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [services/AppUserProfileCache/cacheAppUserProfile](../README.md) / cacheAppUserProfile

# Function: cacheAppUserProfile()

\> **cacheAppUserProfile**(`appUserProfiles`): `Promise`\<`void`\>

Stores app user profiles in Redis cache with a specified time-to-live (TTL).

## Parameters

• **appUserProfiles**: [`InterfaceAppUserProfile`](../../../../models/AppUserProfile/interfaces/InterfaceAppUserProfile.md)[]

Array of app user profiles to be cached.

## Returns

`Promise`\<`void`\>

Promise\<void\>

## Defined in

[src/services/AppUserProfileCache/cacheAppUserProfile.ts:10](https://github.com/PalisadoesFoundation/talawa-api/blob/a6e7ac91b581c9109559657faf0f934f3eb41fe7/src/services/AppUserProfileCache/cacheAppUserProfile.ts#L10)
