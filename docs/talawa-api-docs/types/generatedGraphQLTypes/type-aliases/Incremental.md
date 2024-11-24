[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / Incremental

# Type Alias: Incremental\<T\>

\> **Incremental**\<`T`\>: `T` \| \{ \[P in keyof T\]?: P extends " $fragmentName" \| "\_\_typename" ? T\[P\] : never \}

## Type Parameters

• **T**

## Defined in

[src/types/generatedGraphQLTypes.ts:44](https://github.com/PalisadoesFoundation/talawa-api/blob/92443bb6a5ff3ed66457149a509401986a82e570/src/types/generatedGraphQLTypes.ts#L44)
