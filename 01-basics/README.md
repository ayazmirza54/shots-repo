# `01-basics` — Git fundamentals

```bash
$ git --version
git version <version>
```

## What Git actually tracks

Git records snapshots of your project. Your working directory is what you are editing; the index (staging area) is what you are preparing for the next commit; the repository contains committed snapshots.

```text
WORKING TREE          STAGING AREA             COMMIT HISTORY
   files        --add-->   index        --commit-->    snapshots
      ^                      |                              |
      |------ restore -------|                              |
```

## Inspect before acting

```bash
git status
git branch --show-current
git log --oneline --decorate -5
git diff
git diff --staged
```

Use `git diff` for unstaged changes and `git diff --staged` for what is about to be committed.

## Start a repository

```bash
mkdir my-project
cd my-project
git init
```

## Configure identity

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Inspect configuration:

```bash
git config --list
```

## Stage and commit

```bash
git add app.py
git add src/ tests/
git add .

git commit -m "feat: add health check"
```

Prefer focused commits. A commit should explain one logical change.

### Check what will be committed

```bash
git status
git diff --staged
```

## Read commit history

```bash
git log --oneline
git log --oneline --decorate --graph --all
git show <commit>
```

Useful compact view:

```bash
git log --oneline --decorate --graph --all -20
```

## Ignoring files

Create `.gitignore` for generated or sensitive files:

```gitignore
.env
*.log
node_modules/
__pycache__/
.venv/
.DS_Store
```

Never commit secrets just because they are hidden from normal project views. Treat credentials, tokens, and private keys as sensitive from the beginning.

## Commit message style

A useful pattern is:

```text
feat: add user export
fix: handle empty response
refactor: simplify retry loop
docs: explain deployment
chore: update dependencies
```

## First checkpoint

```text
$ git status
$ git diff
$ git add <intentional-files>
$ git diff --staged
$ git commit -m "meaningful message"
```
