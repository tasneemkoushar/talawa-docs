[talawa-api](../README.md) / [Exports](../modules.md) / [helpers/event/recurringEventHelpers/generateRecurringEventInstances](../modules/helpers_event_recurringEventHelpers_generateRecurringEventInstances.md) / InterfaceRecurringEvent

# Interface: InterfaceRecurringEvent

[helpers/event/recurringEventHelpers/generateRecurringEventInstances](../modules/helpers_event_recurringEventHelpers_generateRecurringEventInstances.md).InterfaceRecurringEvent

## Hierarchy

- [`EventInput`](../modules/types_generatedGraphQLTypes.md#eventinput)

  ↳ **`InterfaceRecurringEvent`**

## Table of contents

### Properties

- [admins](helpers_event_recurringEventHelpers_generateRecurringEventInstances.InterfaceRecurringEvent.md#admins)
- [allDay](helpers_event_recurringEventHelpers_generateRecurringEventInstances.InterfaceRecurringEvent.md#allday)
- [baseRecurringEventId](helpers_event_recurringEventHelpers_generateRecurringEventInstances.InterfaceRecurringEvent.md#baserecurringeventid)
- [creatorId](helpers_event_recurringEventHelpers_generateRecurringEventInstances.InterfaceRecurringEvent.md#creatorid)
- [description](helpers_event_recurringEventHelpers_generateRecurringEventInstances.InterfaceRecurringEvent.md#description)
- [endDate](helpers_event_recurringEventHelpers_generateRecurringEventInstances.InterfaceRecurringEvent.md#enddate)
- [endTime](helpers_event_recurringEventHelpers_generateRecurringEventInstances.InterfaceRecurringEvent.md#endtime)
- [images](helpers_event_recurringEventHelpers_generateRecurringEventInstances.InterfaceRecurringEvent.md#images)
- [isBaseRecurringEvent](helpers_event_recurringEventHelpers_generateRecurringEventInstances.InterfaceRecurringEvent.md#isbaserecurringevent)
- [isPublic](helpers_event_recurringEventHelpers_generateRecurringEventInstances.InterfaceRecurringEvent.md#ispublic)
- [isRegisterable](helpers_event_recurringEventHelpers_generateRecurringEventInstances.InterfaceRecurringEvent.md#isregisterable)
- [latitude](helpers_event_recurringEventHelpers_generateRecurringEventInstances.InterfaceRecurringEvent.md#latitude)
- [location](helpers_event_recurringEventHelpers_generateRecurringEventInstances.InterfaceRecurringEvent.md#location)
- [longitude](helpers_event_recurringEventHelpers_generateRecurringEventInstances.InterfaceRecurringEvent.md#longitude)
- [organization](helpers_event_recurringEventHelpers_generateRecurringEventInstances.InterfaceRecurringEvent.md#organization)
- [organizationId](helpers_event_recurringEventHelpers_generateRecurringEventInstances.InterfaceRecurringEvent.md#organizationid)
- [recurrenceRuleId](helpers_event_recurringEventHelpers_generateRecurringEventInstances.InterfaceRecurringEvent.md#recurrenceruleid)
- [recurring](helpers_event_recurringEventHelpers_generateRecurringEventInstances.InterfaceRecurringEvent.md#recurring)
- [startDate](helpers_event_recurringEventHelpers_generateRecurringEventInstances.InterfaceRecurringEvent.md#startdate)
- [startTime](helpers_event_recurringEventHelpers_generateRecurringEventInstances.InterfaceRecurringEvent.md#starttime)
- [title](helpers_event_recurringEventHelpers_generateRecurringEventInstances.InterfaceRecurringEvent.md#title)

## Properties

### admins

• `Optional` **admins**: `string`[]

#### Defined in

[src/helpers/event/recurringEventHelpers/generateRecurringEventInstances.ts:40](https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/helpers/event/recurringEventHelpers/generateRecurringEventInstances.ts#L40)

___

### allDay

• **allDay**: `boolean`

#### Inherited from

EventInput.allDay

#### Defined in

[src/types/generatedGraphQLTypes.ts:745](https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/types/generatedGraphQLTypes.ts#L745)

___

### baseRecurringEventId

• `Optional` **baseRecurringEventId**: `string`

#### Defined in

[src/helpers/event/recurringEventHelpers/generateRecurringEventInstances.ts:38](https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/helpers/event/recurringEventHelpers/generateRecurringEventInstances.ts#L38)

___

### creatorId

• `Optional` **creatorId**: `string`

#### Defined in

[src/helpers/event/recurringEventHelpers/generateRecurringEventInstances.ts:39](https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/helpers/event/recurringEventHelpers/generateRecurringEventInstances.ts#L39)

___

### description

• **description**: `string`

#### Inherited from

EventInput.description

#### Defined in

[src/types/generatedGraphQLTypes.ts:746](https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/types/generatedGraphQLTypes.ts#L746)

___

### endDate

• **endDate**: `any`

#### Inherited from

EventInput.endDate

#### Defined in

[src/types/generatedGraphQLTypes.ts:747](https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/types/generatedGraphQLTypes.ts#L747)

___

### endTime

• `Optional` **endTime**: `any`

#### Inherited from

EventInput.endTime

#### Defined in

[src/types/generatedGraphQLTypes.ts:748](https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/types/generatedGraphQLTypes.ts#L748)

___

### images

• `Optional` **images**: [`InputMaybe`](../modules/types_generatedGraphQLTypes.md#inputmaybe)\<[`InputMaybe`](../modules/types_generatedGraphQLTypes.md#inputmaybe)\<`string`\>[]\>

#### Inherited from

EventInput.images

#### Defined in

[src/types/generatedGraphQLTypes.ts:749](https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/types/generatedGraphQLTypes.ts#L749)

___

### isBaseRecurringEvent

• `Optional` **isBaseRecurringEvent**: `boolean`

#### Defined in

[src/helpers/event/recurringEventHelpers/generateRecurringEventInstances.ts:36](https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/helpers/event/recurringEventHelpers/generateRecurringEventInstances.ts#L36)

___

### isPublic

• **isPublic**: `boolean`

#### Inherited from

EventInput.isPublic

#### Defined in

[src/types/generatedGraphQLTypes.ts:750](https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/types/generatedGraphQLTypes.ts#L750)

___

### isRegisterable

• **isRegisterable**: `boolean`

#### Inherited from

EventInput.isRegisterable

#### Defined in

[src/types/generatedGraphQLTypes.ts:751](https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/types/generatedGraphQLTypes.ts#L751)

___

### latitude

• `Optional` **latitude**: `any`

#### Inherited from

EventInput.latitude

#### Defined in

[src/types/generatedGraphQLTypes.ts:752](https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/types/generatedGraphQLTypes.ts#L752)

___

### location

• `Optional` **location**: [`InputMaybe`](../modules/types_generatedGraphQLTypes.md#inputmaybe)\<`string`\>

#### Inherited from

EventInput.location

#### Defined in

[src/types/generatedGraphQLTypes.ts:753](https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/types/generatedGraphQLTypes.ts#L753)

___

### longitude

• `Optional` **longitude**: `any`

#### Inherited from

EventInput.longitude

#### Defined in

[src/types/generatedGraphQLTypes.ts:754](https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/types/generatedGraphQLTypes.ts#L754)

___

### organization

• `Optional` **organization**: `string`

#### Defined in

[src/helpers/event/recurringEventHelpers/generateRecurringEventInstances.ts:41](https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/helpers/event/recurringEventHelpers/generateRecurringEventInstances.ts#L41)

___

### organizationId

• **organizationId**: `string`

#### Inherited from

EventInput.organizationId

#### Defined in

[src/types/generatedGraphQLTypes.ts:755](https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/types/generatedGraphQLTypes.ts#L755)

___

### recurrenceRuleId

• `Optional` **recurrenceRuleId**: `string`

#### Defined in

[src/helpers/event/recurringEventHelpers/generateRecurringEventInstances.ts:37](https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/helpers/event/recurringEventHelpers/generateRecurringEventInstances.ts#L37)

___

### recurring

• **recurring**: `boolean`

#### Inherited from

EventInput.recurring

#### Defined in

[src/types/generatedGraphQLTypes.ts:756](https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/types/generatedGraphQLTypes.ts#L756)

___

### startDate

• **startDate**: `any`

#### Inherited from

EventInput.startDate

#### Defined in

[src/types/generatedGraphQLTypes.ts:757](https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/types/generatedGraphQLTypes.ts#L757)

___

### startTime

• `Optional` **startTime**: `any`

#### Inherited from

EventInput.startTime

#### Defined in

[src/types/generatedGraphQLTypes.ts:758](https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/types/generatedGraphQLTypes.ts#L758)

___

### title

• **title**: `string`

#### Inherited from

EventInput.title

#### Defined in

[src/types/generatedGraphQLTypes.ts:759](https://github.com/PalisadoesFoundation/talawa-api/blob/9fa6a1c/src/types/generatedGraphQLTypes.ts#L759)
