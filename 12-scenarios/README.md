# `12-scenarios` — Real-world recipes

## 1. Start a feature

```bash
git switch main
git pull --ff-only
git switch -c feature/export-report

# work

git status
git diff
git add .
git commit -m "feat: add export report"
git push -u origin feature/export-report
```

## 2. Fix a production bug

```bash
git switch main
git pull --ff-only
git switch -c fix/null-response

# fix + test

git add .
git commit -m "fix: handle null response"
git push -u origin fix/null-response
```

## 3. Save unfinished work

```bash
git stash push -u -m "wip: dashboard"
git switch main
```

Later:

```bash
git switch feature/dashboard
git stash pop
```

## 4. Undo a local commit

You committed too early and have not shared the commit:

```bash
git reset --soft HEAD~1
```

Your changes remain staged. Review them and recommit intentionally.

## 5. Undo a shared commit

```bash
git revert <commit>
git push
```

This preserves the existing shared history and records the reversal as a new commit.

## 6. Update your branch with main

Rebase workflow:

```bash
git fetch origin
git switch feature/dashboard
git rebase origin/main
```

Resolve conflicts as needed:

```bash
git add <resolved-file>
git rebase --continue
```

Then push according to your team policy. A previously published rebased branch commonly requires:

```bash
git push --force-with-lease
```

## 7. Recover after a bad reset

```bash
git reflog
git show HEAD@{3}
git branch recovery HEAD@{3}
```

Inspect the recovery branch before making further changes.

## 8. Find when a regression started

```bash
git bisect start
git bisect bad HEAD
git bisect good <known-good>
# test candidate
 git bisect good   # or git bisect bad

git bisect reset
```

## Production-safe habits

```text
✓ pull/ fetch before starting important work
✓ inspect status and diff before commits
✓ keep commits focused
✓ use pull requests for review
✓ prefer revert for shared-history undo
✓ use --force-with-lease instead of plain --force
✓ never commit secrets
✓ know the team's merge/rebase policy
```
