[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [utilities/PII/encryption](../README.md) / encrypt

# Function: encrypt()

\> **encrypt**(`text`, `key`, `iv`): `string`

Encrypts plaintext using AES-256-CBC encryption.

## Parameters

• **text**: `string`

The plaintext to encrypt.

• **key**: `string`

The encryption key as a string.

• **iv**: `string`

The initialization vector (IV) as a string in hexadecimal format.

## Returns

`string`

The encrypted ciphertext as a hexadecimal string.

## Defined in

[src/utilities/PII/encryption.ts:10](https://github.com/PalisadoesFoundation/talawa-api/blob/92443bb6a5ff3ed66457149a509401986a82e570/src/utilities/PII/encryption.ts#L10)
