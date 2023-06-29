---
title: "Pull Request #76"
description: "Tweaks to GSCNativeAnimInstance by adding Data validation and NativeInitializeAnimation() implementation"
eleventyNavigation:
  parent: Changelog
  key: Changelog_PR_76
  title: "6.0.0 - PR #76"
  excerpt: "Tweaks to GSCNativeAnimInstance by adding Data validation and NativeInitializeAnimation() implementation"
layout: layouts/markdown
---

*[on June 24th, 2023](https://github.com/GASCompanion/GASCompanion-Plugin/pull/76)*

## Tweaks to GSCNativeAnimInstance by adding Data validation and NativeInitializeAnimation() implementation

by adding Data validation and NativeInitializeAnimation() implementation.

*   Data validation should now warn about invalid gameplay tags, invalid (wrong type) or missing property with GameplayTags property mapping on Anim Blueprint compilation / save.
*   Added a fail-safe call to InitializeWithAbilitySystem() to initialize the GameplayTags property mapping within NativeInitializeAnimation().
    *   While Gameplay tag property mapping should be initialized from ASC when InitAbilityActorInfo() runs, this call from NativeInitializeAnimation() should ensure property mapping is initialized in case of AnimInstances set later in time (after initial spawn), or even with secondary meshes other than the default Character mesh of ACharacter.
    *   Note that in the case of Player State ASC, NativeInitializeAnimation() may be called before ASC is available, which imply to rely on InitAbilityActorInfo() code path to initialize the anim instance and its property mapping. This is done for the default character mesh (or first USkeletalMeshComponent the ASC can find), but any secondary meshes would need to handle the initialization manually. This can be done in a project specific subclass of UGSCAbilitySystemComponent with an InitAbilityActorInfo override.

Thank you to volodXYZ on Discord for the feedback.

