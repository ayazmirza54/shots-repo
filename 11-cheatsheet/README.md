# `11-cheatsheet` — Command palette

```text
┌───────────────────────────────────────────────────────────────┐
│ $ git <command>                                               │
└───────────────────────────────────────────────────────────────┘
```

| Need | Command |
|---|---|
| Status | `git status` |
| Current branch | `git branch --show-current` |
| List branches | `git branch` |
| Create + switch | `git switch -c feature/name` |
| Switch branch | `git switch name` |
| Stage file | `git add file` |
| Stage all | `git add .` |
| Unstage | `git restore --staged file` |
| Commit | `git commit -m "message"` |
| Recent history | `git log --oneline --decorate -10` |
| Graph | `git log --oneline --decorate --graph --all` |
| Working diff | `git diff` |
| Staged diff | `git diff --staged` |
| Commit details | `git show <commit>` |
| Fetch | `git fetch origin` |
| Pull | `git pull` |
| Push | `git push` |
| First push | `git push -u origin branch` |
| Merge | `git merge branch` |
| Rebase | `git rebase origin/main` |
| Abort merge | `git merge --abort` |
| Abort rebase | `git rebase --abort` |
| Stash | `git stash push -m "wip"` |
| Stash list | `git stash list` |
| Apply stash | `git stash pop` |
| Revert shared commit | `git revert <commit>` |
| Recover refs | `git reflog` |
| Annotated tag | `git tag -a v1.0.0 -m "Release"` |
| Bisect | `git bisect start` |

## The 10 commands worth memorizing

```bash
git status
git switch
git add
git commit
git log
git diff
git fetch
git pull
git push
git restore
```

## Inspect before risky commands

```bash
git status
git branch -vv
git log --oneline --decorate --graph --all -20
```

```text
Remember:
  status → understand state
  diff   → understand changes
  log    → understand history
```
