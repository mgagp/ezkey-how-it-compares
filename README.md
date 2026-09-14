# Ezkey How It Compares

Stop growing password handling in your product backend.

Ezkey offers a bounded path to stronger, self-hosted cryptographic authentication through a backend, a first-party mobile participant, and an SDK integration path that a product team can adopt incrementally.

It is designed for product and SaaS teams that want to stop growing password verification, reset flows, and password lifecycle handling inside an existing application, without turning the roadmap into a full IAM project.

The intended rollout path is deliberate: internal administration first, adjacent operations tooling next, and only later any broader authentication surface if the model proves out.

This repository compares Ezkey with adjacent open-source identity and MFA projects to show where that offer fits, where it does not, and why it may be a pragmatic step beyond passwords plus TOTP.

## What Ezkey offers

- A self-hosted MFA path for an existing product or SaaS application, without starting from a full IdP or IAM rollout.
- A path away from making the product backend keep owning password verification, reset flows, and password lifecycle long term.
- Backend-visible trust decisions, so enrollment, approval, and revocation stay explicit and operable.
- A first-party mobile participant, rather than a purely headless toolkit.
- A constrained first-release model designed to reduce operator ambiguity and integration sprawl.
- A pragmatic adoption path for product teams: additive MFA first, then password replacement later if operations prove out.
- Stronger cryptographic authentication through an SDK integration path that stays reasonably bounded.

## Maturity caveat

This registry compares fit, not maturity. A mature project like Keycloak or authentik can score highly here while still being broader, more proven, and better supported than Ezkey today.

Ezkey remains experimental. The point of this repository is to frame its likely neighborhood honestly, not to imply production equivalence with better-established systems.

## Best initial fit

- A product or SaaS team protecting an existing application rather than designing an identity platform from scratch.
- Internal administration is the clearest first deployment surface, with adjacent operations tools as the natural next step inside the same product boundary.
- A team that wants to stop growing password-handling logic in the application backend, but does not want to start with a full IdP or IAM rollout.
- A roadmap that benefits from explicit server-side visibility over enrollment, approval, and revocation.
- An adoption path that begins on a bounded internal surface, extends next to operations tooling, and can move later toward password replacement if the operating model proves out.

## Most credible adoption path

1. Start inside the product boundary on an internal administration surface.
2. Extend next to adjacent operations tooling, where the trust upgrade is still bounded and supportable.
3. Prove the operator workflow, recovery model, and day-to-day reliability across those internal surfaces.
4. Only then decide whether the same path should expand toward broader user-facing authentication.

## Example first surfaces

1. Internal administration portal: the clearest first fit, because the user group is smaller, the actions are sensitive, and the trust upgrade is easy to justify.
2. Internal operations or support tooling: the natural second surface, especially where actions affect customer data, incident handling, recovery, or operational control.

These examples are ordered on purpose. The point is not to lock Ezkey into a single narrow lane forever, but to show the most credible path to adoption with the least organizational friction.

## Why this path

- It starts where stronger authentication is easiest to justify: smaller operator groups, sensitive actions, and clear accountability.
- It reduces pressure to keep expanding password verification, reset flows, and password lifecycle handling inside the product backend.
- It gives a product team a bounded way to validate enrollment, approval, revocation, recovery, and day-to-day support before touching broader login surfaces.
- It lets the same integration path begin as additive MFA, then later become a password-replacement path if the operating model proves out.

## What has to be true operationally

- Setup has to be boring and repeatable: backend startup, mobile enrollment, and approval flows must work reliably end to end.
- Operator workflows have to be clear: enrollment, revocation, recovery, and routine administration cannot feel ambiguous.
- The SDK path has to stay reasonably bounded, so a product team is not silently signing up for a full IAM rewrite.
- Trust boundaries, logs, backups, and key-handling guidance have to be documented well enough for a real internal rollout.
- The first deployment has to create confidence, not heroics: low-friction demos, conservative claims, and visible operational reasoning matter.

## What Ezkey is not

- Not a general-purpose IdP / SSO hub (unlike Keycloak, authentik, Zitadel, WSO2, Casdoor).
- Not a reverse-proxy authentication companion (unlike Authelia).
- Not a FIDO2/WebAuthn or passkey-first product.
- Not a federation / SAML IdP (unlike Shibboleth).
- Not an identity-governance / provisioning suite (unlike Apache Syncope, OpenIAM).

## How to read this registry

| Fit level | Meaning |
| --- | --- |
| **Closest comparators** | Same problem space and posture; the natural benchmark set. |
| **Adjacent** | Related identity/security stack, but broader or differently focused. |
| **Contextual** | Useful building blocks or references, not a comparable MFA product. |

Similarity is scored on a 1-5 editorial fit scale. See [methodology](methodology.md).

## Contents

- [Master comparison table](COMPARISON.md)
- [Methodology](methodology.md)
- [Closest comparators](categories/closest-comparators.md)
- [Adjacent projects](categories/adjacent.md)
- [Contextual references](categories/contextual.md)
- [Project fact sheets](projects/)

## Contributing

Corrections and new candidates are welcome. Keep the tone neutral and evidence-based: cite the project's own documentation, state the license and deployment model accurately, and score against the methodology rather than personal preference.

## License

This repository is released under the MIT License. Each listed project retains its own license, noted in its fact sheet.

---

_Last evidence pass: 2026-09-10._
