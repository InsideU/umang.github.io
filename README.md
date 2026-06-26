# Umang Infrastructure — Modern Website + Site Manager

A full modern redesign of the company site, plus a browser-based admin panel
to edit names, photos, projects and text — no coding required.

## Files

These files match your existing repo layout (`css/`, `js/`, `img/`, `lib/`).

| File | Purpose |
|------|---------|
| `index.html` | The public website (modern, responsive, single page). |
| `admin.html` | The **Site Manager** — edit content, add/remove team & projects, change photos. |
| `css/modern.css` | New stylesheet (does not touch your existing `css/style.css`). |
| `js/store.js` | Default content + save/load logic. |

## How the editing (CRUD) works

GitHub Pages is a *static* host — it has no database. So the admin panel saves
your edits in **your browser** (localStorage) and gives you an **Export** button.

1. Open `admin.html` (locally or at `umanginfra.com/admin.html`).
2. Edit anything — company name, hero headlines, about text, services, team
   members (add/delete + upload photos), portfolio projects, contact details.
3. Click **Save changes** → reload `index.html` to see them.
4. To make changes **permanent and visible to everyone**, click **Export** to
   download `content.json`, then commit it (see "Make edits permanent" below).

> Photos you upload are embedded directly (no separate file needed). For best
> performance, prefer images under ~1.5 MB, or point to a path like
> `img/team/1.jpg` that already lives in your repo.

## Deploy to your GitHub Pages site

Copy these files into your `umang.github.io` repo (keep your existing `img/`
folder so the default photos resolve), then:

Copy `index.html`, `admin.html`, `css/modern.css` and `js/store.js` into the
matching folders of your repo (your existing `css/style.css` and `js/main.js`
are untouched). Then:

```bash
cd path/to/umang.github.io
git add index.html admin.html css/modern.css js/store.js
git commit -m "Modernise site UI + add admin panel"
git push origin master
```

Your site updates at your domain within a minute or two. The editor lives at
`/admin.html`.

## Make edits permanent (optional, cleaner workflow)

If you'd rather have edits load from a file instead of just localStorage:
export `content.json` from the admin panel, commit it to the repo, and load it
at the top of `index.html` before `store.js`. Ask and this can be wired up.

## Security note

`admin.html` is publicly reachable but only writes to the visitor's own browser —
it cannot change what others see until you export + commit. If you want it
password-gated or removed from the public site, that's a quick follow-up.
