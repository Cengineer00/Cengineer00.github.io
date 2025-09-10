# Personal Website — M. Orhun Köse

A Hugo + PaperMod site for AI consulting profile and blog.

## Local development

- Install Hugo (extended): `brew install hugo`
- Run server: `hugo server -D`
- Open: `http://localhost:1313`

## Content

- Pages live under `content/`.
- Create a post: `hugo new posts/my-post.md`

## Deploy (GitHub Pages)

- Push to `main`. GitHub Actions (`.github/workflows/hugo.yml`) builds and publishes to GitHub Pages automatically.
- Set repo Settings → Pages → Build and deployment → Source: "GitHub Actions".

## Theme

- PaperMod added as a git submodule at `themes/PaperMod`.
- Update theme: `git submodule update --remote --merge`.

## Customize

- Edit `hugo.toml` for site title, profile, and social links.
- Add `static/images/avatar.jpg` for the profile picture and `static/images/cover.jpg` if desired. 