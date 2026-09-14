# Authelia

## Fit

4.5/5 - Closest comparator

| Field | Value |
| --- | --- |
| URL | [https://www.authelia.com/](https://www.authelia.com/) |
| Source | [https://github.com/authelia/authelia](https://github.com/authelia/authelia) |
| Origin | France / EU |
| License | Apache-2.0 |
| Self-hosted | Yes |
| Core focus | Authentication and authorization server plus portal with MFA and SSO |

## Positioning

Open-source authentication and authorization server and portal that provides multi-factor authentication and single sign-on for applications via a web portal. It is an OpenID Connect 1.0 provider and acts as a companion to common reverse proxies such as Traefik, nginx, Caddy, and HAProxy.

## Deployment

Single lightweight Go binary or container. Designed with high availability in mind and deployable as multiple parallel containers on Kubernetes.

## MFA and strong auth

- TOTP
- WebAuthn security keys
- Passkeys
- Mobile push notifications
- Login regulation and brute-force protections
- Identity validation by email for users without a configured second factor

## Protocols and trust model

OpenID Connect 1.0 provider, SSO via session cookie, OIDC, or trusted headers, plus granular access-control policies. The trust model is browser-session and reverse-proxy centric, not device-cryptographic continuity.

## Admin, API, and mobile posture

Strong login portal UX and configuration-driven operation. The programmatic API surface is modest, and there is no first-party mobile app.

## Where it sits versus Ezkey

Authelia is the closest self-hosted MFA plus SSO posture in the registry, but architecturally it is a proxy companion. Ezkey differs by being a standalone backend-first MFA platform with its own mobile-assisted cryptographic flow rather than a gateway in front of web apps.

---

_Last evidence pass: 2026-09-10._
