---
title: Loosely Check Ability Cost
description: Learn how to use Abilities with loose Cost
eleventyNavigation:
    parent: Topics
    key: Loosely Check Ability Cost
    excerpt: Learn how to use Abilities with loose Cost
    order: 2
layout: layouts/markdown
---

`GSCGameplayAbility` provides the option to configure the ability to slightly changed how the resource cost for an ability is handled, by "loosely checking ability cost".

![](loose_check.png)

You might see in some games that, even if an ability has a set resource cost (for instance, Stamina), the ability can be triggered even if the stamina amount available at this moment is lower than the usual cost.

It can even result in [negative values](https://www.reddit.com/r/darksouls3/comments/4kv29o/fun_fact_stamina_goes_negative_when_you_overuse_it/). From [Dark Souls 3 wiki](https://darksouls3.wiki.fextralife.com/Stamina#x--Trivia):

> Stamina can go into negative values if you overuse your remaining stamina. This means that it will take longer for your stamina to recover to its maximum.

Setting the `bLooselyCheckAbilityCost` property to true will allow the ability to activate even if the applied cost would go into negative values, and only prevented if the cost attribute(s) are at `0` or below.

By default, all attributes are clamped at `0`. If you want to have attributes that can go lower than that, this is something that needs to be done in `PostGameplayEffectExecute` method in your Attribute Sets (in native c++), or alternately using Blueprint exposed event explained [here]({{ "/attributes/attributes-events/" | url }}).