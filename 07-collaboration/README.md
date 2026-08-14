# `07-collaboration` — Team workflows

Git becomes most valuable when several people are changing the same codebase.

## Pull request flow

```bash
git switch main
git pull --ff-only
git switch -c feature/my-change

# edit

git add .
git commit -m "feat: implement my change"
git push -u origin feature/my-change
```

Open a pull request from `feature/my-change` into the team's target branch.

## Merge conflicts

A conflict happens when Git cannot automatically combine changes.

```text
<<<<<<< HEAD
current branch version
=======
incoming version
>>>>>>> feature/my-change
```

Resolve the file manually, then:

```bash
git status
git add path/to/resolved-file
git commit
```

For a rebase conflict:

```bash
git add <resolved-file>
git rebase --continue
```

Abort when the operation should not proceed:

```bash
git merge --abort
git rebase --abort
```

## Keep PRs reviewable

```text
GOOD PR
┌────────────────────────────────┐
│ one problem                     │
│ small focused diff              │
│ clear commit/PR description     │
│ tests or verification included  │
└────────────────────────────────┘

BAD PR
┌────────────────────────────────┐
│ feature + refactor + formatting │
│ + unrelated cleanup             │
└────────────────────────────────┘
```

## Before requesting review

```bash
git status
git diff origin/main...HEAD
git log --oneline origin/main..HEAD
```

Run the project's tests, linters, and formatting checks before asking for review.

## Keep your branch current

Prefer the repository's documented merge/rebase policy. One common rebase workflow is:

```bash
git fetch origin
git rebase origin/main
```

Then push according to team policy. Rebasing a published branch may require a safer force update such as:

```bash
git push --force-with-lease
```

Avoid plain `--force` unless you explicitly understand the consequences.
