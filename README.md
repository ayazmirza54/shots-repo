# `$ git-manual`

> A practical, terminal-first Git field guide for everyday engineering.

```text
┌──────────────────────────────────────────────────────────────┐
│  G I T   M A N U A L                                        │
│  ──────────────────────────────────────────────────────────  │
│  learn → practice → ship                                     │
└──────────────────────────────────────────────────────────────┘
```

## The website

The manual is now compiled into a single React + Vite reader with a terminal-style UI.

```bash
npm install
npm run dev
```

The site provides searchable chapter navigation, Markdown chapters loaded from the repository, terminal-style code blocks and commit-graph visuals, a responsive layout, and a research tab with curated Git/GitHub references.

## Why this exists

This is a compact Git manual built for real work rather than memorizing every corner of Git.

```bash
$ git status
$ git diff
$ git add .
$ git commit -m "meaningful change"
$ git push
```

Then go deeper when the situation actually requires it.

## Contents

| Section | What it covers |
|---|---|
| `01-basics` | Mental model, setup, status, staging, commits |
| `02-branches` | Branching, switching, merging, deleting |
| `03-remote` | Remotes, fetch, pull, push, tracking branches |
| `04-history` | Log, diff, show, blame, restore |
| `05-undo` | Restore, reset, revert, reflog |
| `06-stash` | Shelving work safely and recovering it |
| `07-collaboration` | Pull requests, conflict resolution, reviews |
| `08-rebase` | Clean history and interactive rebase |
| `09-tags` | Releases and version markers |
| `10-debugging` | Bisect and practical troubleshooting |
| `11-cheatsheet` | Fast command reference |
| `12-scenarios` | Real-world workflows |

## Core mental model

```text
                      LOCAL MACHINE

  working tree  ──git add──>  staging area  ──commit──>  repository
       │                            │                        │
       └──────────── restore ───────┘                        │
                                                            │
                                              push / fetch  │
                                                            ▼
                                                   REMOTE REPOSITORY
```

Think of Git as a database of snapshots plus pointers that help you navigate those snapshots.

## The golden loop

```bash
# 1. See what changed
git status

# 2. Inspect changes
git diff

# 3. Stage intentionally
git add <file>

# 4. Create a focused snapshot
git commit -m "Describe the change"

# 5. Share it
git push
```

## Working principle

> **Inspect first. Change second. Commit deliberately.**

For risky operations, make the current state observable before changing it:

```bash
git status
git log --oneline --decorate --graph -10
git branch --show-current
```

## Research pass

See [`research/GITHUB-MANUALS.md`](research/GITHUB-MANUALS.md) for the Git/GitHub references reviewed while shaping the site, including Pro Git, Git reference docs, GitHub's Git guides and cheat sheet, and Learn Git Branching.

## Learning path

```text
STATUS → COMMIT → BRANCH → REMOTE → MERGE → UNDO → REBASE → DEBUG
```

```text
$ cd git-manual
$ npm install
$ npm run dev
$ echo "learn by doing"
learn by doing
```
