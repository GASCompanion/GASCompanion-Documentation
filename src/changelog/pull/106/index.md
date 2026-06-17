---
title: "Pull Request #106"
description: "Add UE 5.8 compatibility for FCoreDelegates and AnimNotify signatures"
eleventyNavigation:
  parent: Changelog
  key: Changelog_PR_106
  title: "6.2.3 - PR #106"
  excerpt: "Add UE 5.8 compatibility for FCoreDelegates and AnimNotify signatures"
layout: layouts/markdown
---

*[on June 17th, 2026](https://github.com/GASCompanion/GASCompanion-Plugin/pull/106)*

## Add UE 5.8 compatibility for FCoreDelegates and AnimNotify signatures

*   Update FCoreDelegates::OnPostEngineInit to use GetOnPostEngineInit() accessor, guarded with UE\_VERSION\_NEWER\_THAN(5, 8, -1)
*   Add FAnimNotifyEventReference parameter to AnimNotify/AnimNotifyState overrides to match UE 5.8 API
*   Remove build-docker-5.5 from DOCKER\_TARGETS
*   Clean up unused includes and debug logging in module startup

<!-- codesmith:footer -->

***

<a href="https://app.blacksmith.sh/GASCompanion/codesmith/GASCompanion-Plugin/pr/106"><picture><source media="(prefers-color-scheme: dark)" srcset="https://pr-comments-assets.blacksmith.sh/codesmith/view-with-codesmith-dark-v2.svg"><source media="(prefers-color-scheme: light)" srcset="https://pr-comments-assets.blacksmith.sh/codesmith/view-with-codesmith-light-v2.svg"><img alt="View with Codesmith" src="https://pr-comments-assets.blacksmith.sh/codesmith/view-with-codesmith-dark-v2.svg"></picture></a> <a href="https://backend.blacksmith.sh/track/enable-autofix?expires=1784300179&installation_id=127910837&pr_number=106&repository=GASCompanion%2FGASCompanion-Plugin&return_to=https%3A%2F%2Fgithub.com%2FGASCompanion%2FGASCompanion-Plugin%2Fpull%2F106&signature=d1671f68eb71a5a339cf182ae0710b16471cf96c8a73f5f161c761b3a89e0824"><picture><source media="(prefers-color-scheme: dark)" srcset="https://pr-comments-assets.blacksmith.sh/codesmith/autofix-with-codesmith-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://pr-comments-assets.blacksmith.sh/codesmith/autofix-with-codesmith-light.svg"><img alt="Autofix with Codesmith" src="https://pr-comments-assets.blacksmith.sh/codesmith/autofix-with-codesmith-dark.svg"></picture></a> <sup>Need help on this PR? Tag <code>[**@codesmith**](https://github.com/codesmith)</code> with what you need. Autofix is disabled.</sup>

<!-- codesmith:autofix:disabled -->

<!-- /codesmith:footer -->

