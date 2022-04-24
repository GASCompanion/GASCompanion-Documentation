---
Name: GSCTemplate_GameplayEffectDefinition
layout: layouts/api
eleventyNavigation:
  key: GSCTemplate_GameplayEffectDefinition
  parent: Templates
IncludePath: Templates/GSCTemplate_GameplayEffectDefinition.h
Description: >-
  Parent class for Gameplay Effect Templates.


  Templates are one of special kind. They are only meant to be used to create
  other Gameplay Effect

  based on their Class Default Object, and not meant to be used directly or
  inherited.


  These are not child of UGameplayEffect, but rather an UObject sharing the
  exact same properties as UGameplayEffect.


  This class exists only to allow creation of GE templates Blueprint, that can
  be configured in Project Settings, without

  having them interfere with standard Gameplay Effects dropdown in properties
  and nodes like ApplyGameplayEffect.


  When a new GE is created from a template, a real UGameplayEffect Blueprint is
  created based on the properties defined by the template.
---


# GSCTemplate\_GameplayEffectDefinition

Parent class for Gameplay Effect Templates.

Templates are one of special kind. They are only meant to be used to create other Gameplay Effect
based on their Class Default Object, and not meant to be used directly or inherited.

These are not child of UGameplayEffect, but rather an UObject sharing the exact same properties as UGameplayEffect.

This class exists only to allow creation of GE templates Blueprint, that can be configured in Project Settings, without
having them interfere with standard Gameplay Effects dropdown in properties and nodes like ApplyGameplayEffect.

When a new GE is created from a template, a real UGameplayEffect Blueprint is created based on the properties defined by the template.

## Properties

### DurationPolicy

**Type** `EGameplayEffectDurationType`

Duration Policy:
Policy for the duration of this effect

### DurationMagnitude

**Type** `FGameplayEffectModifierMagnitude`

Duration Magnitude:
Duration in seconds. 0.0 for instantaneous effects; -1.0 for infinite duration.

### Period

**Type** `FScalableFloat`

Period:
Period in seconds. 0.0 for non-periodic effects

### bExecutePeriodicEffectOnApplication

**Type** `bool`

Execute Periodic Effect on Application:
If true, the effect executes on application and then at every period interval. If false, no execution occurs until the first period elapses.

### PeriodicInhibitionPolicy

**Type** `EGameplayEffectPeriodInhibitionRemovedPolicy`

Periodic Inhibition Policy

### Modifiers

**Type** `Array of FGameplayModifierInfo`

Modifiers:
Array of modifiers that will affect the target of this effect

### Executions

**Type** `Array of FGameplayEffectExecutionDefinition`

Executions

### ChanceToApplyToTarget

**Type** `FScalableFloat`

Chance to Apply to Target:
Probability that this gameplay effect will be applied to the target actor (0.0 for never, 1.0 for always)

### ApplicationRequirements

**Type** `Array of UGameplayEffectCustomApplicationRequirement`

Application Requirements

### ConditionalGameplayEffects

**Type** `Array of FConditionalGameplayEffect`

Conditional Gameplay Effects:
other gameplay effects that will be applied to the target of this effect if this effect applies

### OverflowEffects

**Type** `Array of UGameplayEffect`

Overflow Effects:
Effects to apply when a stacking effect "overflows" its stack count through another attempted application. Added whether the overflow application succeeds or not.

### bDenyOverflowApplication

**Type** `bool`

Deny Overflow Application:
If true, stacking attempts made while at the stack count will fail, resulting in the duration and context not being refreshed

### bClearStackOnOverflow

**Type** `bool`

Clear Stack on Overflow:
If true, the entire stack of the effect will be cleared once it overflows

### PrematureExpirationEffectClasses

**Type** `Array of UGameplayEffect`

Premature Expiration Effect Classes:
Effects to apply when this effect is made to expire prematurely (like via a forced removal, clear tags, etc.); Only works for effects with a duration

### RoutineExpirationEffectClasses

**Type** `Array of UGameplayEffect`

Routine Expiration Effect Classes:
Effects to apply when this effect expires naturally via its duration; Only works for effects with a duration

### bRequireModifierSuccessToTriggerCues

**Type** `bool`

Require Modifier Success to Trigger Cues:
If true, cues will only trigger when GE modifiers succeed being applied (whether through modifiers or executions)

### bSuppressStackingCues

**Type** `bool`

Suppress Stacking Cues:
If true, GameplayCues will only be triggered for the first instance in a stacking GameplayEffect.

### GameplayCues

**Type** `Array of FGameplayEffectCue`

Gameplay Cues:
Cues to trigger non-simulated reactions in response to this GameplayEffect such as sounds, particle effects, etc

### UIData

**Type** `UGameplayEffectUIData*`

UIData:
Data for the UI representation of this effect. This should include things like text, icons, etc. Not available in server-only builds.

### InheritableGameplayEffectTags

**Type** `FInheritedTagContainer`

Inheritable Gameplay Effect Tags:
The GameplayEffect's Tags: tags the the GE *has* and DOES NOT give to the actor.

### InheritableOwnedTagsContainer

**Type** `FInheritedTagContainer`

Inheritable Owned Tags Container:
"These tags are applied to the actor I am applied to"

### OngoingTagRequirements

**Type** `FGameplayTagRequirements`

Ongoing Tag Requirements:
Once Applied, these tags requirements are used to determined if the GameplayEffect is "on" or "off". A GameplayEffect can be off and do nothing, but still applied.

### ApplicationTagRequirements

**Type** `FGameplayTagRequirements`

Application Tag Requirements:
Tag requirements for this GameplayEffect to be applied to a target. This is pass/fail at the time of application. If fail, this GE fails to apply.

### RemovalTagRequirements

**Type** `FGameplayTagRequirements`

Removal Tag Requirements:
Tag requirements that if met will remove this effect. Also prevents effect application.

### RemoveGameplayEffectsWithTags

**Type** `FInheritedTagContainer`

Remove Gameplay Effects with Tags:
GameplayEffects that *have* tags in this container will be cleared upon effect application.

### GrantedApplicationImmunityTags

**Type** `FGameplayTagRequirements`

Granted Application Immunity Tags:
Grants the owner immunity from these source tags.

### GrantedApplicationImmunityQuery

**Type** `FGameplayEffectQuery`

Granted Application Immunity Query:
Grants immunity to GameplayEffects that match this query. Queries are more powerful but slightly slower than GrantedApplicationImmunityTags.

### RemoveGameplayEffectQuery

**Type** `FGameplayEffectQuery`

Remove Gameplay Effect Query:
On Application of an effect, any active effects with this this query that matches against the added effect will be removed. Queries are more powerful but slightly slower than RemoveGameplayEffectsWithTags.

### StackingType

**Type** `EGameplayEffectStackingType`

Stacking Type:
How this GameplayEffect stacks with other instances of this same GameplayEffect

### StackLimitCount

**Type** `int32`

Stack Limit Count:
Stack limit for StackingType

### StackDurationRefreshPolicy

**Type** `EGameplayEffectStackingDurationPolicy`

Stack Duration Refresh Policy:
Policy for how the effect duration should be refreshed while stacking

### StackPeriodResetPolicy

**Type** `EGameplayEffectStackingPeriodPolicy`

Stack Period Reset Policy:
Policy for how the effect period should be reset (or not) while stacking

### StackExpirationPolicy

**Type** `EGameplayEffectStackingExpirationPolicy`

Stack Expiration Policy:
Policy for how to handle duration expiring on this gameplay effect

### GrantedAbilities

**Type** `Array of FGameplayAbilitySpecDef`

Granted Abilities:
Granted abilities
    
