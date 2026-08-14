# `03-remote` — Working with remotes

A remote is a named reference to another Git repository.

```bash
git remote -v
git remote add origin <url>
```

## Fetch vs pull

```bash
git fetch origin
```

`fetch` downloads remote references without changing your current branch.

```bash
git pull
```

`pull` is essentially fetch + integration of the fetched changes into the current branch. Know what integration strategy your repository uses before relying on it.

A cautious update:

```bash
git fetch origin
git log --oneline --decorate --graph HEAD..origin/main
git merge origin/main
```

## Push

First push of a new branch:

```bash
git push -u origin feature/dashboard
```

Later:

```bash
git push
```

## Tracking branches

```bash
git branch -vv
git status
```

Set upstream explicitly:

```bash
git push --set-upstream origin feature/dashboard
```

## Clone

```bash
git clone <repository-url>
cd <repository-name>
```

## Rename a remote

```bash
git remote rename origin upstream
```

More commonly, keep `origin` for your writable fork and add `upstream` for the source repository:

```bash
git remote add upstream <source-repository-url>
git fetch upstream
```

## Sync a long-lived branch

```bash
git switch main
git fetch origin
git merge --ff-only origin/main
```

If your team explicitly uses rebasing for this workflow, use the repository's documented policy rather than mixing strategies casually.
