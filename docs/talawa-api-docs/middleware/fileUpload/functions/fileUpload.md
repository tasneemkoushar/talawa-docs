[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [middleware/fileUpload](../README.md) / fileUpload

# Function: fileUpload()

\> **fileUpload**(`fieldName`): `RequestHandler`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\>

A middleware for handling optional file uploads.
All data must be sent as multipart/form-data, but the file field is optional.

## Parameters

• **fieldName**: `string`

The name of the file field in the form

## Returns

`RequestHandler`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\>

Express middleware for handling file upload

## Defined in

[src/middleware/fileUpload.ts:22](https://github.com/PalisadoesFoundation/talawa-api/blob/bba5d82264abb62b9e358a3d3fe1af18a8a8f6e4/src/middleware/fileUpload.ts#L22)
