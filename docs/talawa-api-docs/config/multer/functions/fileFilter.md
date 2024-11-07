[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [config/multer](../README.md) / fileFilter

# Function: fileFilter()

\> **fileFilter**(`req`, `file`, `cb`): `void`

File filter function for multer.

This function checks the MIME type of the uploaded file against allowed image and video types.
If the file type is valid, it calls the callback with `true`. Otherwise, it calls the callback
with an error message.

## Parameters

• **req**: `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\>

The Express request object.

• **file**: `File`

The file being uploaded.

• **cb**: `FileFilterCallback`

The callback function to indicate if the file is accepted or rejected.

## Returns

`void`

## Example

```typescript
fileFilter(req, file, cb);
```

## Defined in

[src/config/multer/index.ts:27](https://github.com/PalisadoesFoundation/talawa-api/blob/bba5d82264abb62b9e358a3d3fe1af18a8a8f6e4/src/config/multer/index.ts#L27)
