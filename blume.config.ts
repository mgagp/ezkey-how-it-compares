import { defineConfig } from "blume";

export default defineConfig({
  title: "Ezkey How it compares",
  description:
    "A static reading surface for the Ezkey comparison corpus: overview, methodology, categories, and project fact sheets.",
  content: {
    root: ".",
    include: [
      "index.mdx",
      "overview.mdx",
      "comparison.mdx",
      "methodology.mdx",
      "categories/**/*.mdx",
      "projects/**/*.mdx",
    ],
    exclude: ["docs/**", "dist/**", "node_modules/**", ".blume/**"],
  },
  navigation: {
    featured: [
      { label: "Repository overview", href: "/overview" },
      { label: "Master comparison", href: "/comparison" },
      { label: "Methodology", href: "/methodology" },
    ],
    sidebar: [
      { label: "Repository overview", root: "/overview" },
      { label: "Master comparison", root: "/comparison" },
      { label: "Methodology", root: "/methodology" },
      {
        label: "Categories",
        display: "group",
        items: [
          { label: "Closest comparators", root: "/categories/closest-comparators" },
          { label: "Adjacent projects", root: "/categories/adjacent" },
          { label: "Contextual references", root: "/categories/contextual" },
        ],
      },
      {
        label: "Project fact sheets",
        display: "group",
        collapsed: true,
        items: [
          { label: "Authelia", root: "/projects/authelia" },
          { label: "authentik", root: "/projects/authentik" },
          { label: "Zitadel", root: "/projects/zitadel" },
          { label: "Keycloak", root: "/projects/keycloak" },
          { label: "Ory Kratos", root: "/projects/ory-kratos" },
          { label: "privacyIDEA", root: "/projects/privacyidea" },
          { label: "WSO2 Identity Server", root: "/projects/wso2-identity-server" },
          { label: "Casdoor", root: "/projects/casdoor" },
          { label: "Apache Syncope", root: "/projects/apache-syncope" },
          { label: "StrongKey", root: "/projects/strongkey" },
          { label: "Shibboleth IdP", root: "/projects/shibboleth-idp" },
          { label: "OpenIAM", root: "/projects/openiam" },
        ],
      },
    ],
  },
});
