# Keycloak

## Fit

4/5 - Closest comparator

| Field | Value |
| --- | --- |
| URL | [https://www.keycloak.org/](https://www.keycloak.org/) |
| Source | [https://github.com/keycloak/keycloak](https://github.com/keycloak/keycloak) |
| Origin | Red Hat / US |
| License | Apache-2.0; CNCF incubation project |
| Self-hosted | Yes |
| Core focus | Identity and Access Management |

## Positioning

Mature, widely adopted open-source Identity and Access Management platform that adds authentication to applications and secures services so apps do not have to store or authenticate users themselves.

## Deployment

Self-hosted through containers or bare metal, with clustering for scalability and availability.

## MFA and strong auth

- OTP and two-factor authentication
- Passkeys
- Configurable required actions
- User-managed 2FA via the account console

## Protocols and trust model

OpenID Connect, OAuth 2.0, and SAML 2.0, plus LDAP or Active Directory user federation, identity brokering, social login, and fine-grained authorization services. The posture is browser-flow and SSO centric, not device-cryptographic first.

## Admin, API, and mobile posture

Very strong admin console plus a full Admin REST API, with adapters, themes, and extension points. No first-party device-crypto mobile app.

## Where it sits versus Ezkey

Keycloak is the reference IAM plus MFA benchmark. It is heavier and SSO-centric, and MFA is one feature among many. Ezkey is MFA-first, lighter, and does not target full IAM parity.

---

_Last evidence pass: 2026-09-10._
