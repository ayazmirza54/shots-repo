# `$ git-manual`

> A practical, terminal-first Git field guide for everyday engineering.

```text
┌──────────────────────────────────────────────────────────────┐
│  G I T   M A N U A L                                        │
│  ──────────────────────────────────────────────────────────  │
│  learn → practice → ship                                     │
└──────────────────────────────────────────────────────────────┘
```

## Why this exists

This is a compact Git manual built for real work rather than memorizing every corner of Git.

The goal is simple:

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

## Quick start

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

git init

git remote add origin <repository-url>
git branch -M main

git add .
git commit -m "initial commit"
git push -u origin main
```

## Working principle

> **Inspect first. Change second. Commit deliberately.**

For risky operations, make the current state observable before changing it:

```bash
git status
git log --oneline --decorate --graph -10
git branch --show-current
```

## Suggested learning path

```text
STATUS → COMMIT → BRANCH → REMOTE → MERGE → UNDO → REBASE → DEBUG
```

---

### Terminal aesthetic

All detailed chapters use shell-style examples, compact explanations, and scenario-driven guidance.

```text
$ cd git-manual
$ less 01-basics/README.md
$ echo "learn by doing"
learn by doing
```
