## Purpose

This registry maps open-source projects against Ezkey's intended fit, not against a generic notion of "best auth tool". A project can be excellent and still score low here simply because it solves a different problem.

## Selection criteria

A project is included when it meets one or more of these:

- Open-source or publicly available source.
- MFA or strong-authentication focus.
- Self-hosted identity and access stack.
- Backend-first or API-first authentication model.
- Mobile, device-bound, or cryptographic authentication model.
- Adjacent to existing-app MFA and Duo-like operating assumptions.

## Similarity scale (1-5)

| Score | Meaning |
|---|---|
| **5** | Closely similar to Ezkey's intended fit: backend-first cryptographic MFA, self-hosted, mobile-assisted. |
| **4** | Same problem space, different architecture. |
| **3** | Adjacent identity stack; useful for comparison, not a direct alternative. |
| **2** | Broad identity or access context only. |
| **1** | Only a technical building block, such as a TOTP app or OAuth toolkit. |

No project currently scores a full 5, because Ezkey's specific combination of a first-party mobile app plus a cryptographic, backend-first MFA protocol that is deliberately not WebAuthn-centric remains its differentiator. The closest candidates land at 4.5.

## Evaluation axes

Each project is assessed on:

1. Self-hosting and operator autonomy.
2. MFA or strong authentication as a core capability versus a side feature.
3. Trust model: backend-first versus browser-session-first versus federation-first.
4. API, integration, and multi-tenant posture.
5. Product shape: turnkey security product versus toolkit versus IdP hub.

## Public category labels

- Closest comparators: same neighborhood and evaluation set, even when the product shape differs.
- Adjacent: relevant identity or security systems that help frame the market, but are broader or differently centered.
- Contextual: components, apps, proxies, or protocol building blocks that are useful references without being product-level comparators.

## Evidence discipline

- Cite the project's own site or documentation for license, deployment model, and feature claims.
- Prefer primary sources over third-party summaries.
- Record the date of the evidence pass; capabilities change, especially around MFA and passkeys.
- Keep the tone neutral. This is a comparison catalog, not a sales sheet.

## Standard fact-sheet fields

- Name, URL, source repository
- Origin or country
- License and any commercial tier
- Self-hosted status
- Core focus
- MFA, SSO, passwordless, passkeys
- Crypto or device-bound aspects
- Admin, API, mobile posture
- Comparability with Ezkey: score plus rationale
- Notes

---

_Last evidence pass: 2026-09-10._