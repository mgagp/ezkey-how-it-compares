# privacyIDEA

## Fit

4/5 - Adjacent, strongest pure MFA-server comparator

| Field | Value |
| --- | --- |
| URL | [https://privacyidea.org/](https://privacyidea.org/) |
| Source | [https://github.com/privacyidea/privacyidea](https://github.com/privacyidea/privacyidea) |
| Origin | Germany / EU |
| License | AGPLv3; Enterprise Edition available commercially |
| Self-hosted | Yes |
| Core focus | Open-source two-factor and multi-factor authentication server |

## Positioning

Award-winning, enterprise-ready open-source 2FA and MFA server. It strengthens existing applications such as local login, VPN, remote access, SSH, and web portals by adding a second factor.

## Deployment

Runs on Linux, written in Python with Flask and an SQL datastore. Lean install footprint with a commercial enterprise edition available from NetKnights.

## MFA and strong auth

- OTP
- Challenge-response
- U2F and Yubikeys
- SSH keys
- x509 certificates
- Passkeys on the 2026 roadmap

Tokens can be assigned by administrators or self-enrolled by users.

## Protocols and trust model

REST API with JWT authentication. Reads users from LDAP, Active Directory, SQL, flat files, and SCIM, with a policy engine and event-handler framework controlling self-service and administration behavior.

## Admin, API, and mobile posture

Clear management and self-service portals with a strong REST API. The orientation is a MFA and 2FA server rather than a bundled first-party mobile product.

## Where it sits versus Ezkey

privacyIDEA is the most credible pure MFA-server comparator and a strong EU reference. Ezkey differs by coupling a backend-first cryptographic protocol with a first-party mobile app and Admin UI as one product, rather than focusing on a broad token catalog.

---

_Last evidence pass: 2026-09-10._
