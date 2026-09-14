**Fit: 3.5/5 - Adjacent**

| Field | Value |
|---|---|
| URL | https://casdoor.org/ |
| Source | https://github.com/casdoor/casdoor |
| Origin | China / international community |
| License | Apache-2.0 |
| Self-hosted | Yes |
| Core focus | UI-first self-hosted IdP and SSO platform |

## Positioning

UI-first, self-hosted Identity and Access Management and Single Sign-On platform with a bundled admin and login UI. In contrast with headless identity systems, Casdoor presents itself as a more complete out-of-the-box identity surface.

## Deployment

Self-hosted Go backend plus React frontend, with Docker and Kubernetes deployment paths and support for multiple SQL databases.

## MFA and strong auth

- MFA
- TOTP
- SMS and email verification
- WebAuthn support
- Social and OAuth login

## Protocols and trust model

OIDC, OAuth2, SAML, CAS, LDAP, and SCIM, with a broad social-login provider catalog. The trust posture is browser and SSO centric rather than device-cryptographic first.

## Admin, API, and mobile posture

Complete bundled admin console plus REST API, with organization and application concepts. There is no first-party device-cryptographic mobile app.

## Where it sits versus Ezkey

Casdoor is a general-purpose self-hosted IdP and SSO product with good admin ergonomics. Ezkey narrows the scope to cryptographic, mobile-assisted MFA rather than operating as a broader identity hub.

---

_Last evidence pass: 2026-09-10._