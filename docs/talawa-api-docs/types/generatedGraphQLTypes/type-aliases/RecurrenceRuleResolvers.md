[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / RecurrenceRuleResolvers

# Type Alias: RecurrenceRuleResolvers\<ContextType, ParentType\>

\> **RecurrenceRuleResolvers**\<`ContextType`, `ParentType`\>: `object`

## Type Parameters

• **ContextType** = `any`

• **ParentType** *extends* [`ResolversParentTypes`](ResolversParentTypes.md)\[`"RecurrenceRule"`\] = [`ResolversParentTypes`](ResolversParentTypes.md)\[`"RecurrenceRule"`\]

## Type declaration

### \_\_isTypeOf?

\> `optional` **\_\_isTypeOf**: [`IsTypeOfResolverFn`](IsTypeOfResolverFn.md)\<`ParentType`, `ContextType`\>

### baseRecurringEvent?

\> `optional` **baseRecurringEvent**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Event"`\]\>, `ParentType`, `ContextType`\>

### count?

\> `optional` **count**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"PositiveInt"`\]\>, `ParentType`, `ContextType`\>

### frequency?

\> `optional` **frequency**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Frequency"`\], `ParentType`, `ContextType`\>

### interval?

\> `optional` **interval**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"PositiveInt"`\], `ParentType`, `ContextType`\>

### latestInstanceDate?

\> `optional` **latestInstanceDate**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Date"`\]\>, `ParentType`, `ContextType`\>

### organization?

\> `optional` **organization**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Organization"`\]\>, `ParentType`, `ContextType`\>

### recurrenceEndDate?

\> `optional` **recurrenceEndDate**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Date"`\]\>, `ParentType`, `ContextType`\>

### recurrenceRuleString?

\> `optional` **recurrenceRuleString**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"String"`\], `ParentType`, `ContextType`\>

### recurrenceStartDate?

\> `optional` **recurrenceStartDate**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Date"`\], `ParentType`, `ContextType`\>

### weekDayOccurenceInMonth?

\> `optional` **weekDayOccurenceInMonth**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Int"`\]\>, `ParentType`, `ContextType`\>

### weekDays?

\> `optional` **weekDays**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"WeekDays"`\]\>[]\>, `ParentType`, `ContextType`\>

## Defined in

[src/types/generatedGraphQLTypes.ts:4829](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/types/generatedGraphQLTypes.ts#L4829)
