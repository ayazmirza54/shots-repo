# `06-stash` — Stash work safely

Stash is useful when you need a clean working tree without committing unfinished work.

```bash
git stash push -m "wip: dashboard filters"
```

See stashes:

```bash
git stash list
```

Inspect one:

```bash
git stash show -p stash@{0}
```

Apply without deleting:

```bash
git stash apply stash@{0}
```

Apply and remove from the stash list:

```bash
git stash pop
```

Delete one:

```bash
git stash drop stash@{0}
```

Delete all stashes:

```bash
git stash clear
```

## Include untracked files

```bash
git stash push -u -m "wip"
```

## Scenario

```text
You are halfway through feature A.
A production fix arrives.

$ git stash push -u -m "wip: feature A"
$ git switch main
$ git switch -c fix/production-issue
# fix → commit → push

$ git switch feature/A
$ git stash pop
```

Stash is a temporary shelf, not a replacement for meaningful commits.
