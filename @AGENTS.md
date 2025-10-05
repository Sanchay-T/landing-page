# Agent Handbook: Magic UI Access

This playbook explains how to work with Magic UI assets in this repository without leaking secrets or mutating the codebase unintentionally.

## 1. Environment & Safety Checks
- Always confirm the Pro registry token exists, but never print its value:
  ```bash
  if [ -f .env.local ]; then
    if grep -q '^MAGICUI_PRO_REGISTRY_TOKEN=' .env.local; then
      echo 'MAGICUI_PRO_REGISTRY_TOKEN present'
    else
      echo 'MAGICUI_PRO_REGISTRY_TOKEN missing'
    fi
  else
    echo '.env.local missing'
  fi
  ```
- When you need the token in a shell session, temporarily export variables and suppress stdout from `source`:
  ```bash
  set -o allexport
  source .env.local >/dev/null 2>&1
  set +o allexport
  ```
- Never echo the token or commit fetched artifacts; work inside `/tmp` when staging downloads.

## 2. Open-Source Components via MCP
- Use Magic UI MCP tools for the public catalog:
  - `magicui__getUIComponents` returns metadata for all OSS UI elements.
  - `magicui__getComponents`, `magicui__getButtons`, etc., provide implementation snippets and install commands.
- This is the preferred path for anything already exposed on https://magicui.design.

## 3. Magic UI Pro Registry (REST)
- The Pro registry requires the Bearer token above. Example pattern:
  ```bash
  curl -s -H "Authorization: Bearer $MAGICUI_PRO_REGISTRY_TOKEN" \
    https://pro.magicui.design/registry/<slug> \
    -o /tmp/<slug>.json
  ```
- Useful endpoints:
  - Manifest of all slugs: `https://pro.magicui.design/registry.json`
    ```bash
    curl -s -H "Authorization: Bearer $MAGICUI_PRO_REGISTRY_TOKEN" \
      https://pro.magicui.design/registry.json \
      -o /tmp/magicui-pro-registry.json
    jq -r '.items[].name' /tmp/magicui-pro-registry.json > /tmp/magicui-pro-component-list.txt
    ```
  - Individual blocks (examples):
    - `header-1`, `hero-1`, `pricing-1`, `faq-1`, etc.
- Many Pro blocks depend on shared utilities (e.g., `@magicui/border-beam`). Read the `registryDependencies` field in each payload before integrating.

## 4. Installing Pro Components Later
- When edits to the repo are allowed, prefer the official CLI so files land in the right paths:
  ```bash
  npx shadcn@latest add @magicui-pro/<slug>
  ```
- Commit only the generated sources plus any required dependency updates.

## 5. Housekeeping
- Keep downloads transient (`/tmp`). Delete them when done.
- Document any new procedures in this file rather than repeating discovery work.
- If the Pro registry changes (new categories, renamed slugs), refresh the manifest and update the slug list here.

Refer back to this guide before interacting with Magic UI resources.
