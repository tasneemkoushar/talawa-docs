[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / ErrorResolvers

# Type Alias: ErrorResolvers\<ContextType, ParentType\>

\> **ErrorResolvers**\<`ContextType`, `ParentType`\>: `object`

## Type Parameters

• **ContextType** = `any`

• **ParentType** *extends* [`ResolversParentTypes`](ResolversParentTypes.md)\[`"Error"`\] = [`ResolversParentTypes`](ResolversParentTypes.md)\[`"Error"`\]

## Type declaration

### \_\_resolveType

\> **\_\_resolveType**: [`TypeResolveFn`](TypeResolveFn.md)\<`"MemberNotFoundError"` \| `"OrganizationMemberNotFoundError"` \| `"OrganizationNotFoundError"` \| `"PostNotFoundError"` \| `"UnauthenticatedError"` \| `"UnauthorizedError"` \| `"UserNotAuthorizedAdminError"` \| `"UserNotAuthorizedError"` \| `"UserNotFoundError"`, `ParentType`, `ContextType`\>

### message?

\> `optional` **message**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"String"`\], `ParentType`, `ContextType`\>

## Defined in

[src/types/generatedGraphQLTypes.ts:4155](https://github.com/PalisadoesFoundation/talawa-api/blob/f4877b986932181336f42a7336754de05976cd97/src/types/generatedGraphQLTypes.ts#L4155)
