**Fit: 4/5 - Closest comparator**

| Field | Value |
|---|---|
| URL | https://www.ory.com/kratos/ |
| Source | https://github.com/ory/kratos |
| Origin | Germany / EU |
| License | Apache-2.0 for OSS; Ory Enterprise License and Ory Network are commercial tiers |
| Self-hosted | Yes |
| Core focus | Headless, API-first identity and user management |

## Positioning

Cloud-native, headless identity and user management system. It ships no built-in login UI, so you build the frontend yourself or use Ory's companion experiences.

## Deployment

Self-host the OSS distribution with PostgreSQL, MySQL, CockroachDB, or SQLite for development and test, or use the commercial self-hosted and managed offerings.

## MFA and strong auth

- Password and social login
- TOTP
- WebAuthn and FIDO2
- Passkeys
- SMS OTP, email OTP, and magic links
- Lookup and recovery codes

## Device binding

Ory can tie a login to a private key generated inside the phone's secure hardware and verified by Apple or Google attestation so it cannot be copied or spoofed. This is the single closest capability to Ezkey's cryptographic device model in the registry, but it is part of the enterprise offering rather than the OSS baseline.

## Protocols and trust model

Headless identity API with native session management and OIDC social sign-in, plus separation of concerns across the wider Ory suite. The strongest B2B and enterprise features are outside the OSS core.

## Admin, API, and mobile posture

Full Admin API for identity lifecycle plus webhooks, cookieless and CSRF-free API flows for native mobile, and reference implementations for Node.js, Next.js, and React Native.

## Where it sits versus Ezkey

Ory Kratos is the closest backend-first architectural cousin in the set. The main differences are that it is headless, its strongest device-binding capability is paywalled, and it spans a broader identity suite, whereas Ezkey ships an opinionated product with its own Admin UI and first-party mobile app.

---

_Last evidence pass: 2026-09-10._