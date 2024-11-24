[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [utilities/encodedImageStorage/deletePreviousImage](../README.md) / deletePreviousImage

# Function: deletePreviousImage()

\> **deletePreviousImage**(`imageToBeDeletedPath`): `Promise`\<`void`\>

Deletes the previous image file if its `numberOfUses` is 1 and updates the `numberOfUses` in the database.

## Parameters

• **imageToBeDeletedPath**: `string`

Path of the image to be deleted.

## Returns

`Promise`\<`void`\>

## Defined in

[src/utilities/encodedImageStorage/deletePreviousImage.ts:9](https://github.com/PalisadoesFoundation/talawa-api/blob/92443bb6a5ff3ed66457149a509401986a82e570/src/utilities/encodedImageStorage/deletePreviousImage.ts#L9)
