---
Name: GSCBTTask_BlueprintBase
layout: layouts/api
eleventyNavigation:
  key: GSCBTTask_BlueprintBase
  parent: AI
IncludePath: AI/GSCBTTask_BlueprintBase.h
Description: >-
  The only difference with UBTTask_BlueprintBase is that GetStaticDescription
  can be overriden in Blueprints.
---


# GSCBTTask\_BlueprintBase

The only difference with UBTTask\_BlueprintBase is that GetStaticDescription can be overriden in Blueprints.

## Events

### K2\_GetStaticDescription

Overrides Task GetStaticDescription()
Should return string containing description of this node with all setup values

**Returns** `FString`
    
