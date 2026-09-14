**Fit: 3/5 - Adjacent**

| Field | Value |
|---|---|
| URL | https://www.shibboleth.net/products/identity-provider/ |
| Source | https://git.shibboleth.net/view/?p=java-identity-provider.git |
| Origin | US / academic community |
| License | Apache-2.0 |
| Self-hosted | Yes |
| Core focus | Federation and SSO identity provider |

## Positioning

Shibboleth IdP is a major reference point for federated identity, especially in academic and institutional environments. Its relevance to Ezkey is mostly comparative and ecosystem-level rather than architectural.

## Deployment

Self-hosted identity provider with a configuration-heavy posture suited to organizations operating federated identity infrastructure.

## MFA and strong auth

- MFA via plugins and integration patterns
- SSO and federation as the primary focus

## Protocols and trust model

SAML2 as the primary protocol, with OIDC available through plugin and federation patterns. The trust model is federation and browser-session centric, not device-cryptographic and backend-first.

## Admin, API, and mobile posture

Enterprise and academic administration model with a strong configuration footprint. There is no consumer-style or first-party cryptographic mobile participant.

## Where it sits versus Ezkey

Shibboleth is a key federation reference, but it solves a different problem. Ezkey is not a federation IdP; it is a backend-first cryptographic MFA product.

---

_Last evidence pass: 2026-09-10._