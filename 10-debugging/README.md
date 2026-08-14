# `10-debugging` — Find the commit that broke it

When the cause is unclear, Git can narrow the search.

## Bisect

`git bisect` performs a binary search through commit history.

Start:

```bash
git bisect start
git bisect bad
 git bisect good <known-good-commit>
```

Git checks out a candidate commit. Test the application, then mark it:

```bash
git bisect good
```

or:

```bash
git bisect bad
```

Repeat until Git identifies the first bad commit.

Finish:

```bash
git bisect reset
```

## Automated bisect

If a command can reliably return success/failure, Git can run the search automatically:

```bash
git bisect start HEAD <known-good-commit>
git bisect run ./test-script.sh
git bisect reset
```

The script should exit `0` for good and non-zero for bad, with the project's documented conventions respected.

## Debug checklist

```text
1. git status
2. git log --oneline --decorate -20
3. git diff
4. identify the last known-good commit
5. git bisect if the range is large
6. inspect the suspect commit with git show
7. fix + test
```
