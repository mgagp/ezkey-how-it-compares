Evidence pass: 2026-09-10. Similarity is scored on a 1-5 editorial fit scale against Ezkey's intended fit.

Ezkey here means: backend-first cryptographic MFA, self-hosted, mobile-assisted, API-first, and deliberately not FIDO2/WebAuthn-centric.

| Project | Fit | Category | Origin | License | Self-hosted | MFA / strong auth | Protocols / posture | Admin / API / mobile |
|---|---|---|---|---|---|---|---|---|
| [Authelia](projects/authelia.md) | 4.5 | Closest comparator | France / EU | Apache-2.0 | Yes | TOTP, WebAuthn, passkeys, push, login regulation | OIDC provider (certified), SSO, reverse-proxy companion | Strong portal UX; modest API; no native mobile |
| [authentik](projects/authentik.md) | 4.5 | Closest comparator | Germany / EU | MIT core (+ enterprise) | Yes | MFA, WebAuthn/passkeys, conditional access | OIDC, OAuth2, SAML2, LDAP, RADIUS, SCIM | Strong admin, REST API, large integrations |
| [Zitadel](projects/zitadel.md) | 4.5 | Closest comparator | CH/DE / EU | Apache-2.0 | Yes | MFA, passkeys, passwordless, per-tenant factors | OIDC (certified), SAML, gRPC+REST, multi-tenant | Excellent API-first; Flutter SDK example |
| [Keycloak](projects/keycloak.md) | 4 | Closest comparator | Red Hat / US | Apache-2.0 | Yes | OTP/2FA, passkeys | OIDC, OAuth2, SAML2, LDAP/AD, brokering | Strong admin console + Admin REST API |
| [Ory Kratos](projects/ory-kratos.md) | 4 | Closest comparator | Germany / EU | Apache-2.0 (+ OEL/Network) | Yes | TOTP, WebAuthn, passkeys, OTP; device binding (enterprise) | Headless identity API, OIDC social, federation | API-first/headless; native mobile flows |
| [privacyIDEA](projects/privacyidea.md) | 4 | Adjacent | Germany / EU | AGPLv3 | Yes | OTP, challenge-response, U2F, x509, passkeys | REST API (JWT), LDAP/AD/SQL/SCIM sources | Admin + self-service portals; MFA-server focus |
| [WSO2 Identity Server](projects/wso2-identity-server.md) | 3.5 | Adjacent | Sri Lanka / Asia | Apache-2.0 (+ commercial) | Yes | MFA, SSO, adaptive auth, OTP | OIDC, SAML, OAuth2, federation, CIAM | Strong enterprise admin + API; heavy |
| [Casdoor](projects/casdoor.md) | 3.5 | Adjacent | China / intl | Apache-2.0 | Yes | MFA (TOTP, SMS/email), WebAuthn | OIDC, OAuth2, SAML, CAS, LDAP, SCIM | Bundled admin UI + REST API |
| [Apache Syncope](projects/apache-syncope.md) | 3.5 | Adjacent | Apache / EU | Apache-2.0 | Yes | Access mgmt; MFA via integration | Identity mgmt, provisioning, LDAP/AD, SSO | Good REST API; enterprise admin |
| [StrongKey](projects/strongkey.md) | 3.5 | Adjacent | US | LGPL (+ commercial) | Yes | FIDO strong auth, PKI, key management | FIDO2/WebAuthn server, PKI, crypto APIs | Crypto/API-heavy; technical admin |
| [Shibboleth IdP](projects/shibboleth-idp.md) | 3 | Adjacent | US / academic | Apache-2.0 | Yes | MFA via plugins; SSO/federation primary | SAML2 (primary), OIDC via plugin, federation | Config-heavy admin; no consumer mobile |
| [OpenIAM](projects/openiam.md) | 3 | Adjacent | US | Community + commercial | Yes | Passwordless, adaptive auth, SSO | IGA, provisioning, access reviews | Enterprise governance admin; heavy IGA |
| 2FAS | 2 | Contextual | Italy / EU + community | Open source | Partial | TOTP authenticator, mobile-first | Client-side 2FA | Mobile app; not a self-hosted IdP |
| FreeOTP | 1.5 | Contextual | Red Hat / US | Apache-2.0 | Client-side | TOTP/HOTP | OATH tokens | Authenticator app only |
| Bitwarden | 1.5 | Contextual | US | AGPL/GPL/BSL mix | Partial | TOTP, passkeys, vault-based MFA | Vault-centric | Apps + self-host; not a Duo-like MFA platform |
| Pomerium | 2 | Contextual | US | Apache-2.0 | Yes | Identity-aware access, OIDC | Access proxy, policy-based routing | Proxy + admin; not an MFA platform |
| Dex | 1.5 | Contextual | CNCF / US | Apache-2.0 | Yes | OIDC connector / federation | OIDC identity broker | Config-driven; building block |
| Ory Hydra | 1.5 | Contextual | Germany / EU | Apache-2.0 | Yes | OAuth2 / OIDC provider | Token issuance, delegation | Headless; pairs with Kratos |

## Reading the scores

- 4.5: closest comparators in posture and evaluation relevance.
- 4: same space, different architecture. This includes Keycloak, Ory Kratos, and privacyIDEA.
- 3 to 3.5: adjacent IAM, IGA, federation, or crypto-heavy systems.
- 1.5 to 2: contextual references such as authenticators, proxies, vaults, and OAuth/OIDC building blocks.

See [methodology](methodology.md) for the scoring rubric.