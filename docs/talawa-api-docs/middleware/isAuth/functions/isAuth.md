[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [middleware/isAuth](../README.md) / isAuth

# Function: isAuth()

\> **isAuth**(`request`): [`InterfaceAuthData`](../interfaces/InterfaceAuthData.md)

This function determines whether the user is authorised and whether the access token has expired.

## Parameters

• **request**: `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\>

User Request object from Express.

## Returns

[`InterfaceAuthData`](../interfaces/InterfaceAuthData.md)

Returns `authData` object with `isAuth`, `expired` and `userId` properties.

## Defined in

[src/middleware/isAuth.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/92443bb6a5ff3ed66457149a509401986a82e570/src/middleware/isAuth.ts#L18)
