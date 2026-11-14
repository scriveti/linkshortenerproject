# UI Components

All UI in this app is built with **shadcn/ui**. Do NOT create custom components.

## Rules

- Every UI element (buttons, inputs, dialogs, cards, tables, menus, etc.) must use a shadcn/ui component from `@/components/ui`.
- Do not hand-roll, wrap, or restyle-from-scratch any element that shadcn/ui provides. Do not create custom components, including wrappers around shadcn components.
- If a needed shadcn component is not installed, add it with the CLI instead of writing it manually:

```bash
npx shadcn@latest add <component>
```

- Do not hand-edit the generated files in `components/ui/` unless explicitly asked.
- Compose layouts with plain semantic HTML elements and Tailwind classes only (e.g. `div`, `main`, `section`) around shadcn components.
- Merge class names with the `cn` utility from `@/lib/utils`.
- Icons come from `lucide-react` only.

## Config

- Style: `base-nova` (built on `@base-ui/react`), configured in `components.json`.
- Aliases: `@/components/ui` for components, `@/lib/utils` for utilities.
- Use the `base-nova` APIs (Base UI), not Radix-based patterns from other shadcn styles.
- Styling uses Tailwind CSS v4 theme variables defined in `app/globals.css`; do not hardcode colors outside the theme.

## Exceptions

Third-party auth UI from Clerk (`SignInButton`, `SignUpButton`, `UserButton`, etc.) is allowed as specified in [authentication.md](authentication.md).
