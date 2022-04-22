---
Name: GSCUWDebugAbilityQueue
layout: layouts/api
eleventyNavigation:
  key: GSCUWDebugAbilityQueue
  parent: UI
IncludePath: UI/GSCUWDebugAbilityQueue.h
Description: GSCUWDebug Ability Queue
---


# GSCUWDebugAbilityQueue

GSCUWDebug Ability Queue

## Table of Contents

*   [Properties](#properties)

    *   [ClearFromMontageDelay](#clearfrommontagedelay)
    *   [AbilityQueueEnabledText](#abilityqueueenabledtext)
    *   [AbilityQueueOpenedText](#abilityqueueopenedtext)
    *   [CurrentQueuedAbilityText](#currentqueuedabilitytext)
    *   [AllowAllAbilitiesText](#allowallabilitiestext)
    *   [AllowedAbilityTemplateText](#allowedabilitytemplatetext)
    *   [AbilityQueueFromMontageTemplateText](#abilityqueuefrommontagetemplatetext)
    *   [AllowedAbilitiesBox](#allowedabilitiesbox)
    *   [AbilityQueueFromMontagesBox](#abilityqueuefrommontagesbox)
    *   [AbilityQueueFromMontagesPanel](#abilityqueuefrommontagespanel)

## Properties

### ClearFromMontageDelay

**Type** `float`

Clear from Montage Delay:
The amount of time (in seconds) that "From Montage" rows stay on screen

### AbilityQueueEnabledText

**Type** `UTextBlock*`

Ability Queue Enabled Text

### AbilityQueueOpenedText

**Type** `UTextBlock*`

Ability Queue Opened Text

### CurrentQueuedAbilityText

**Type** `UTextBlock*`

Current Queued Ability Text

### AllowAllAbilitiesText

**Type** `UTextBlock*`

Allow All Abilities Text

### AllowedAbilityTemplateText

**Type** `UTextBlock*`

Allowed Ability Template Text:
Convenience TextBlock that serves as a "template" for allowed abilities row,
so that we can customize its styling in Blueprints (font size, color, etc.)

### AbilityQueueFromMontageTemplateText

**Type** `UTextBlock*`

Ability Queue from Montage Template Text:
Convenience TextBlock that serves as a "template" for ability queue from montages row,
so that we can customize its styling in Blueprints (font size, color, etc.)

### AllowedAbilitiesBox

**Type** `UVerticalBox*`

Allowed Abilities Box

### AbilityQueueFromMontagesBox

**Type** `UVerticalBox*`

Ability Queue from Montages Box

### AbilityQueueFromMontagesPanel

**Type** `UCanvasPanel*`

Ability Queue from Montages Panel
    
