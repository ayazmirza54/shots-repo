# `09-tags` — Tags and releases

Tags give a stable name to an important commit, commonly a release.

```bash
git tag
```

Create an annotated release tag:

```bash
git tag -a v1.0.0 -m "Release v1.0.0"
```

Inspect it:

```bash
git show v1.0.0
```

Push a single tag:

```bash
git push origin v1.0.0
```

Push all local tags:

```bash
git push origin --tags
```

Delete a local tag:

```bash
git tag -d v1.0.0
```

Delete a remote tag:

```bash
git push origin --delete v1.0.0
```

## Version pattern

```text
vMAJOR.MINOR.PATCH

v1.0.0   first stable release
v1.1.0   backward-compatible feature
v1.1.1   backward-compatible fix
v2.0.0   breaking change
```

Use the versioning convention your project follows rather than inventing a second scheme.
