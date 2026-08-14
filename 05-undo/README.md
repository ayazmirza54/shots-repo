# `05-undo` — Undo without panic

Git has several different undo mechanisms. Pick based on **where the change exists** and whether the commit has been shared.

```text
uncommitted file change  → git restore
staged change             → git restore --staged
local commit to rewrite   → git reset
shared commit to counter  → git revert
lost/rewritten reference  → git reflog
```

## Restore a working-tree file

Discard local edits to a tracked file:

```bash
git restore path/to/file
```

This removes uncommitted changes in that file. Make sure you actually want to lose them.

## Unstage

```bash
git restore --staged path/to/file
```

The file stays modified but is removed from the staging area.

## Amend the last commit

```bash
git add <forgotten-file>
git commit --amend
```

Use only when rewriting the most recent commit is acceptable, especially before it is shared.

## Reset

Three common modes:

```bash
git reset --soft HEAD~1
git reset --mixed HEAD~1
git reset --hard HEAD~1
```

`--soft` keeps changes staged.

`--mixed` keeps changes in the working tree but unstaged; this is the default mode.

`--hard` moves the current branch and overwrites working-tree/index state. Treat it as destructive.

## Revert a shared commit

When a commit is already part of shared history:

```bash
git revert <commit>
```

This creates a new commit that reverses the selected change without rewriting existing shared history.

## Reflog: the emergency map

```bash
git reflog
```

Reflog records local reference movements, which can help recover commits after resets or rebases.

Example:

```bash
git reflog
git show HEAD@{2}
git branch recovery HEAD@{2}
```

## Golden rule

```text
PRIVATE / LOCAL → reset can be appropriate
SHARED / PUBLIC → revert is usually safer
```
