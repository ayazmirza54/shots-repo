# `08-rebase` — Rewriting history intentionally

Rebase moves your commits onto a new base, producing a cleaner linear history in many workflows.

```text
before
A──B──C    main
   \
    D──E   feature

rebase feature onto main

A──B──C──D'──E'   feature
```

## Basic rebase

```bash
git fetch origin
git switch feature/my-change
git rebase origin/main
```

Resolve conflicts as they appear:

```bash
git status
# edit files
git add <resolved-file>
git rebase --continue
```

Abort:

```bash
git rebase --abort
```

## Interactive rebase

Squash, reorder, or edit recent commits:

```bash
git rebase -i HEAD~4
```

Typical actions:

```text
pick    keep commit
reword  edit commit message
edit    pause and modify commit
squash  combine with previous commit
fixup   combine and discard this message
drop    remove commit
```

## When to use it

Good candidates:

- Clean up your own local branch before review.
- Replay local work on the newest base.

Avoid rewriting shared history unless your team explicitly expects it.

After rebasing a branch that already exists on the remote, use the safer update:

```bash
git push --force-with-lease
```

## Mental model

```text
merge  = preserve existing history + create integration
rebase = replay commits on a different base
```

Neither is universally better. Follow your team's repository policy.
