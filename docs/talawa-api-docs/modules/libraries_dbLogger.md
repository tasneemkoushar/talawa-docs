[talawa-api](../README.md) / [Exports](../modules.md) / libraries/dbLogger

# Module: libraries/dbLogger

## Table of contents

### Interfaces

- [InterfaceLoggableDocument](../interfaces/libraries_dbLogger.InterfaceLoggableDocument.md)
- [InterfaceLoggableQuery](../interfaces/libraries_dbLogger.InterfaceLoggableQuery.md)

### Type Aliases

- [TransactionLogInfo](libraries_dbLogger.md#transactionloginfo)

### Variables

- [default](libraries_dbLogger.md#default)

### Functions

- [createLoggingMiddleware](libraries_dbLogger.md#createloggingmiddleware)

## Type Aliases

### TransactionLogInfo

Ƭ **TransactionLogInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `model` | `string` |
| `query?` | `string` |
| `timestamp` | `string` |
| `type` | `string` |
| `update?` | `string` |

#### Defined in

[src/libraries/dbLogger.ts:5](https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/libraries/dbLogger.ts#L5)

## Variables

### default

• **default**: `winston.Logger` \| ``null`` = `null`

#### Defined in

[src/libraries/dbLogger.ts:13](https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/libraries/dbLogger.ts#L13)

## Functions

### createLoggingMiddleware

▸ **createLoggingMiddleware**\<`T`\>(`schema`, `modelName`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Document`\<`any`, `any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | `Schema`\<`T`, `Model`\<`T`, `any`, `any`, `any`, `IfAny`\<`T`, `any`, `Document`\<`unknown`, `any`, `T`\> & `Require_id`\<`T`\>\>, `any`\>, \{\}, \{\}, \{\}, \{\}, `DefaultSchemaOptions`, `ObtainDocumentType`\<`any`, `T`, `ResolveSchemaOptions`\<`DefaultSchemaOptions`\>\>, `IfAny`\<`FlatRecord`\<`ObtainDocumentType`\<`any`, `T`, `ResolveSchemaOptions`\<`DefaultSchemaOptions`\>\>\>, `any`, `Document`\<`unknown`, \{\}, `FlatRecord`\<`ObtainDocumentType`\<`any`, `T`, `ResolveSchemaOptions`\<`DefaultSchemaOptions`\>\>\>\> & `Require_id`\<`FlatRecord`\<`ObtainDocumentType`\<`any`, `T`, `ResolveSchemaOptions`\<`DefaultSchemaOptions`\>\>\>\>\>\> |
| `modelName` | `string` |

#### Returns

`void`

#### Defined in

[src/libraries/dbLogger.ts:40](https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/libraries/dbLogger.ts#L40)
