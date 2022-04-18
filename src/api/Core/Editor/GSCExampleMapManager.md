---
Name: GSCExampleMapManager
layout: layouts/api
eleventyNavigation:
  key: GSCExampleMapManager
  parent: Core/Editor
IncludePath: Core/Editor/GSCExampleMapManager.h
Description: GSCExample Map Manager
---


# GSCExampleMapManager

GSCExample Map Manager

## Table of Contents

*   [Properties](#properties)

    *   [ActionMappings](#actionmappings)
    *   [AxisMappings](#axismappings)
    *   [GameplayTags](#gameplaytags)
    *   [AttributeSets](#attributesets)

## Properties

### ActionMappings

**Type** `Array of FInputActionKeyMapping`

Action Mappings:
List of Action Mappings required to run the template / sample.

Define here the list of action mappings and their associated key input.

### AxisMappings

**Type** `Array of FInputAxisKeyMapping`

Axis Mappings:
List of Action Mappings required to run the template / sample.

Define here the list of axis mappings and their associated axis input.

### GameplayTags

**Type** `TArray`

Gameplay Tags:
List of GameplayTags required to run the template / sample.

Define here the list of GameplayTags Strings in the form of "A.B.C".

When the map loads, the user will be asked if these tags can be created for him.

### AttributeSets

**Type** `Array of UAttributeSet`

Attribute Sets:
List of Attribute Sets required to run the template / sample.

Define here the list of AttributeSets that are meant to be configured in GAS Companion Project's Settings.

When the map loads, the user will be asked if these AttributeSets can be registered for him.
    
