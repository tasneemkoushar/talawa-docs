[**talawa-api**](../../../../../README.md) • **Docs**

***

[talawa-api](../../../../../modules.md) / [REST/services/file/uploadFile](../README.md) / uploadFile

# Function: uploadFile()

\> **uploadFile**(`req`, `res`): `Promise`\<[`InterfaceUploadedFileResponse`](../interfaces/InterfaceUploadedFileResponse.md)\>

Handles file upload.

## Parameters

• **req**: `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\>

The HTTP request object containing the file.

• **res**: `Response`\<`any`, `Record`\<`string`, `any`\>\>

The HTTP response object used to send the response.

## Returns

`Promise`\<[`InterfaceUploadedFileResponse`](../interfaces/InterfaceUploadedFileResponse.md)\>

UploadedFileResponse - The response containing file ID and object key.

## Throws

Error - Throws an error if no file is uploaded or if the file type is invalid.

## Defined in

[src/REST/services/file/uploadFile.ts:28](https://github.com/PalisadoesFoundation/talawa-api/blob/a6e7ac91b581c9109559657faf0f934f3eb41fe7/src/REST/services/file/uploadFile.ts#L28)
