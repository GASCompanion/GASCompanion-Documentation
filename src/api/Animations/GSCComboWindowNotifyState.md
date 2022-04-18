---
Name: GSCComboWindowNotifyState
layout: layouts/api
eleventyNavigation:
  key: GSCComboWindowNotifyState
  parent: Animations
IncludePath: Animations/GSCComboWindowNotifyState.h
Description: >-
  Use this notify state to open a combo window during witch the player can queue
  up the next combo by activating the ability again.


  Don't forget to set the `bEndCombo` property to true on this notifier if the
  montage is the last one of your combo chain.
---


# GSCComboWindowNotifyState

Use this notify state to open a combo window during witch the player can queue up the next combo by activating the ability again.

Don't forget to set the `bEndCombo` property to true on this notifier if the montage is the last one of your combo chain.

## Table of Contents

*   [Properties](#properties)

    *   [bEndCombo](#bendcombo)

## Properties

### bEndCombo

**Type** `bool`

End Combo:
Whether this montage is ending a combo (last montage in the combo chain)
    
