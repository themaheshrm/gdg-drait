# Contributing

Thank you for helping build the GDG on Campus Dr. AIT website! Contributions from every domain team — DSA, Web, AI/ML, Cloud and Design — are welcome.

## Ground rules

- Follow the [Code of Conduct](CODE_OF_CONDUCT.md).
- **Never push directly to `main`.** All changes go through pull requests.
- **Only publish verified information.** No invented statistics, events, names, photos or links. If something is unknown, leave it `null` — the site shows a labelled placeholder.
- Get consent before adding a person's name, photo or profile links.
- Keep the project frontend-only: no backend, database, authentication or CMS.

## Workflow

1. **Find or open an issue.** Pick one labelled `good first issue`, or open a new one using a template.
2. **Fork** the repository (or, if you are a maintainer, clone it).
3. **Create a branch** from the latest `main` (see naming below).
4. **Make focused changes.** One topic per pull request.
5. **Check locally:**
   ```bash
   npm run lint
   npm run build
   ```
   Then open `npm run dev` and check your change on desktop and mobile widths.
6. **Open a pull request** into `main` and fill in the template. Add screenshots for visual changes.
7. **Respond to review.** At least one maintainer approval is required to merge.

## Branching strategy

`main` is always deployable and protected. Work happens on short-lived branches named `<type>/<scope>-<short-description>`:

| Type | Use for | Example |
|---|---|---|
| `content/` | Updating data files (events, team, projects, gallery, resources) | `content/events-react-workshop` |
| `feat/` | New features or sections | `feat/gallery-video-support` |
| `fix/` | Bug fixes | `fix/mobile-menu-focus` |
| `design/` | Visual/design-system changes | `design/footer-spacing` |
| `docs/` | Documentation | `docs/readme-deploy-steps` |
| `chore/` | Tooling, dependencies, CI | `chore/update-vite` |

Domain teams may prefix the scope with their domain, e.g. `content/aiml-bootcamp-2027` or `content/team-2027`.

Keep branches up to date with `main` by merging or rebasing your own branch before requesting review. Delete the branch after merge.

## Commit messages

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
content(events): add Intro to React workshop
fix(nav): close mobile menu on Escape
feat(gallery): support video thumbnails
```

## Code guidelines

- TypeScript, functional components and hooks. No `any`.
- Put **content** in `src/data/`, not in components.
- Reuse components from `src/components/common` and `src/components/cards` before creating new ones.
- Style with Tailwind utility classes and the brand tokens in `tailwind.config.ts`. Don't hard-code new colours.
- Accessibility: semantic HTML, alt text, visible focus states, keyboard support, labelled buttons.
- Keep dependencies minimal — discuss new packages in an issue first.
- External links: use the `Button` `href` prop or `target="_blank" rel="noopener noreferrer"`.

## Adding images

- Put files in `public/images/<section>/` (e.g. `public/images/events/`).
- Use `.webp` or `.jpg`, longest side ≤ 1600 px, ideally < 300 KB.
- Use lowercase, hyphenated file names: `devfest-2026-stage.webp`.
- Write meaningful `alt` text.

## Need help?

Open an issue or ask the Web Development domain lead. Happy building! 🚀
