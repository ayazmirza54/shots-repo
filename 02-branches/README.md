# `02-branches` — Branching

Branches are movable references to commits. Use them to isolate work.

```bash
git branch
git switch -c feature/dashboard
git switch main
```

Create without switching:

```bash
git branch feature/dashboard
git switch feature/dashboard
```

Delete after merge:

```bash
git branch -d feature/dashboard
```

Force-delete only when you understand why:

```bash
git branch -D feature/dashboard
```

## Merge

```bash
git switch main
git pull
git merge feature/dashboard
git push
```

## Fast-forward vs merge commit

```text
main:    A──B
             \
feature:      C──D
```

A fast-forward can move the `main` pointer directly to `D` when no divergent commit exists.

When histories diverge:

```text
A──B────M      main
   \\  /
    C──D       feature
```

Git may create merge commit `M`.

## View branch topology

```bash
git log --oneline --decorate --graph --all
```

## Practical branch naming

```text
feature/<thing>
fix/<bug>
chore/<maintenance>
docs/<topic>
refactor/<area>
```

## Safe branch workflow

```bash
git switch main
git pull --ff-only
git switch -c feature/my-change
# work

git status
git add .
git commit -m "feat: add my change"
git push -u origin feature/my-change
```
