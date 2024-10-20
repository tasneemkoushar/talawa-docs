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

[src/utilities/encodedImageStorage/deletePreviousImage.ts:9](https://github.com/PalisadoesFoundation/talawa-api/blob/f1c816bca43cc03a8c1bd303394e2550a50db017/src/utilities/encodedImageStorage/deletePreviousImage.ts#L9)
