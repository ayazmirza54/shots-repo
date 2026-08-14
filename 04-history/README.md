# `04-history` — Inspecting history

```bash
git log --oneline --decorate --graph --all
git show <commit>
git diff HEAD~1 HEAD
git blame <file>
```

## Compare states

Working tree vs last commit:

```bash
git diff
```

Staged changes vs last commit:

```bash
git diff --staged
```

Two commits:

```bash
git diff <old>..<new>
```

## Find a commit

```bash
git log --all --oneline --grep="keyword"
```

## Show one commit

```bash
git show --stat <commit>
git show <commit> -- path/to/file
```

## Blame

```bash
git blame path/to/file
```

Use blame to locate the commit that last changed a line, then inspect that commit. It is a history tool, not a tool for assigning blame to people.

## Useful references

```bash
git rev-parse HEAD
git branch --show-current
git remote -v
```

## Before a risky operation

Capture enough context to recover:

```bash
git status
git log --oneline --decorate -10
git branch -vv
```
