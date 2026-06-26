# Umang Infrastructure — Website

A modern, premium single-page website for Umang Infrastructure (Purnia, Bihar),
plus a **private** Site Manager for editing content safely.

## Files

| File | Purpose |
|------|---------|
| `index.html` | The public website (navy + gold, responsive, single page). |
| `content.json` | The site's content (text, team, projects, contact). The live site reads from this. |
| `admin.html` | The **private** Site Manager — passcode-protected editor. Not linked from the public site. |
| `img/` | Photos (the firm's real project & reservoir photos). |

## How editing works (and why it's safe)

GitHub Pages is a *static* host — there is no public database and **no public
edit button**. That means a random visitor cannot change, deface, or "hack" your
live website. Content only changes when the `content.json` file in your GitHub
repository changes — and only you, signed in to GitHub, can do that.

To change photos, text, or add/remove team members or projects:

1. Open **`admin.html`** and enter your passcode (default: `umang2006`).
2. Use the tabs to edit anything — company info, hero headlines, about text,
   team members (add / delete / upload photos), projects, contact details.
3. Click **Export content.json** to download the updated file.
4. Replace `content.json` in your repo with the downloaded file and commit it
   (or just ask Claude in Cowork to do this for you).
5. Your live site updates within a minute or two.

> Tip: uploaded photos are embedded directly into `content.json`. For best
> performance, keep images under ~1.5 MB, or save them into `img/` and point to
> a path like `img/portfolio/7.jpg`.

## Security summary

- **No public editing.** The old public "Edit Site" link has been removed from
  the website and footer.
- **The editor is passcode-gated** (`admin.html`) and marked `noindex`, so it
  won't appear in search engines.
- **Publishing requires your GitHub login.** Even with the passcode, the editor
  only produces a file — nothing goes live until `content.json` is committed to
  your repo. This is the real lock, and it cannot be bypassed from a browser.

### Change the editor passcode

The passcode is stored only as a SHA-256 hash in `admin.html` (the plain
passcode is never in the code). To set a new one:

1. Pick a new passcode and compute its SHA-256 hash, e.g. in a terminal:
   `printf '%s' "YOUR_NEW_PASSCODE" | sha256sum`
2. In `admin.html`, replace the value of `PASS_HASH` with the new hash.
3. Commit `admin.html`.

(Or ask Claude to do steps 1–2 for you.)

## Deploy

Commit the changed files and push:

```bash
git add index.html admin.html content.json README.md
git commit -m "Premium navy/gold redesign + private passcode-gated editor"
git push origin master
```

Your site updates at https://www.umanginfra.com within a minute or two.
