[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / MakeOptional

# Type Alias: MakeOptional\<T, K\>

\> **MakeOptional**\<`T`, `K`\>: [`Omit`](Omit.md)\<`T`, `K`\> & `\{ [SubKey in K]?: Maybe\<T[SubKey]\> \}`

## Type Parameters

• **T**

• **K** *extends* keyof `T`

## Defined in

[src/types/generatedGraphQLTypes.ts:41](https://github.com/PalisadoesFoundation/talawa-api/blob/bba5d82264abb62b9e358a3d3fe1af18a8a8f6e4/src/types/generatedGraphQLTypes.ts#L41)
