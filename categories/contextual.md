# Contextual references

These entries are useful because they clarify what should not be confused with a product-level comparator.

They are building blocks, authenticator apps, vaults, proxies, or OAuth and OIDC plumbing. They matter for context, but they do not compete directly with Ezkey's product shape.

| Project | Fit | One-line positioning |
| --- | --- | --- |
| Pomerium | 2 | Identity-aware access proxy; access control, not an MFA platform. |
| 2FAS | 2 | Mobile-first TOTP authenticator and 2FA management. |
| Bitwarden | 1.5 | Password manager with TOTP and passkeys; vault-backed auth. |
| FreeOTP | 1.5 | OATH TOTP and HOTP authenticator app. |
| Dex | 1.5 | OIDC identity broker and connector. |
| Ory Hydra | 1.5 | OAuth2 and OIDC provider for token issuance and delegation. |

## Notes

- 2FAS and FreeOTP are authenticator apps: a factor or client, not a platform.
- Bitwarden is primarily a vault product with MFA-related features, not an MFA server.
- Pomerium secures access at the proxy layer; it is complementary rather than comparable.
- Dex and Ory Hydra are protocol building blocks you compose into a larger system.

This category exists so the registry stays honest about the difference between a component and a platform.
