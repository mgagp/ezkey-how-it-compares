# Closest comparators

These projects sit closest to Ezkey's neighborhood: self-hosted, MFA-strong, and part of the natural evaluation set for a team asking what a backend-first MFA system should be compared with.

They are not identical in product shape. Some are proxy companions, some are full IdPs, and some are headless identity systems. The point of this category is evaluation relevance, not product equivalence.

These are Ezkey's closest comparators by problem space, not by maturity. Ezkey remains earlier, narrower, and not yet proven operationally.

| Project | Fit | One-line positioning |
| --- | --- | --- |
| [Authelia](../projects/authelia.md) | 4.5 | Self-hosted auth server plus portal; MFA and SSO companion to reverse proxies. |
| [authentik](../projects/authentik.md) | 4.5 | Self-hosted general-purpose IdP with broad protocol and MFA coverage. |
| [Zitadel](../projects/zitadel.md) | 4.5 | API-first, multi-tenant identity infrastructure with passkeys and MFA. |
| [Keycloak](../projects/keycloak.md) | 4 | Mature open-source IAM with OIDC, SAML, and MFA. |
| [Ory Kratos](../projects/ory-kratos.md) | 4 | Headless, API-first identity and MFA, with enterprise device binding. |

## Why these, and how Ezkey differs

- Authelia is the closest self-hosted MFA plus SSO posture, but it is a reverse-proxy companion. Ezkey is a standalone MFA platform, not a gateway in front of web apps.
- authentik, Keycloak, and Zitadel are full IdP or IAM hubs. Ezkey deliberately narrows scope to cryptographic, mobile-assisted MFA and does not aim to replace an IdP or SSO layer.
- Ory Kratos shares Ezkey's backend-first philosophy most closely and even offers a hardware-attested device-binding capability, but that capability is part of its enterprise offering and Kratos is headless, whereas Ezkey ships an opinionated first-party mobile app and Admin UI as a product.

## The Ezkey lens

This is the mirror view of the same comparison: not what each comparator does first, but what Ezkey is trying to combine in a narrower product shape.

| Ezkey focus | Closest signal among these projects | Why the overlap is partial |
| --- | --- | --- |
| Backend-visible trust decisions | Ory Kratos | Closest architectural signal, but headless and broader as an identity suite. |
| Self-hosted MFA with a lighter operational story | Authelia | Closest simplicity signal, but proxy-centric rather than a standalone MFA product. |
| API-first product surface with tenant-aware design | Zitadel | Strongest API-first overlap, but aimed at broader identity infrastructure. |
| Strong admin surface without requiring a full IAM move | authentik and Keycloak | Mature admin and protocol breadth, but both pull toward a larger IdP or IAM adoption path. |
| First-party mobile participant in the trust story | Ory Kratos, partially | The nearest device-binding signal is enterprise-tier and not packaged as the same end-to-end product shape. |

Taken together, these overlaps are the point. Ezkey is not trying to exceed the maturity or breadth of these projects. It is trying to bring a more specific combination into one bounded product: stronger cryptographic authentication, explicit backend control, a first-party mobile participant, and a rollout path that can begin on internal admin and operations surfaces before expanding further.
