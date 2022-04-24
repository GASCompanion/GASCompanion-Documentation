---
Name: GSCGameFeatureAction_AddInputMappingContext
layout: layouts/api
eleventyNavigation:
  key: GSCGameFeatureAction_AddInputMappingContext
  parent: GameFeatures/Actions
IncludePath: GameFeatures/Actions/GSCGameFeatureAction_AddInputMappingContext.h
Description: |-
  Adds InputMappingContext to local players' EnhancedInput system.

  Expects that local players are set up to use the EnhancedInput system.
---


# GSCGameFeatureAction\_AddInputMappingContext

Adds InputMappingContext to local players' EnhancedInput system.

Expects that local players are set up to use the EnhancedInput system.

## Properties

### InputMapping

**Type** `TSoftObjectPtr<UInputMappingContext>`

Input Mapping:
Input Mapping Context to add to local players EnhancedInput system.

### Priority

**Type** `int32`

Priority:
Higher priority input mappings will be prioritized over mappings with a lower priority.
    
