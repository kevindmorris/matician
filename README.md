<div align="center">

**[Matician](): (/məˈtiSH(ə)n/) Shorthand for a specialist or expert in mathematics.**

<p>
A modern JavaScript utility library for arithmatic, mathematics, proability, statistics, and more.
</p>

</div>

# Table of Contents

- [Getting Started](#getting-started)
- [Release a New Version](#release-a-new-version)

# Getting Started

Use your preferred package manager:

```
npm install matician
```

# Release a New Version

1. Merge all changes to master.

2. Update CHANGELOG.md.

3. Version the code.

```bash
npm version [major | minor | patch] # Increment the version
```

```bash
git push origin --tags # Push new tag to git
```

4. Build the package.

```bash
npm run build
```

5. Publish.

```bash
npm publish
```
