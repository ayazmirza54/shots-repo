# Git manual research pass

This project was shaped after reviewing strong Git/GitHub learning references. The goal is to learn from their information architecture and coverage, not reproduce their text.

## Sources reviewed

| Resource | What it contributes |
|---|---|
| [Pro Git](https://git-scm.com/book/en/v2) | Deep coverage: basics, branching, remotes, distributed workflows and GitHub. |
| [Git Reference](https://git-scm.com/docs) | Complete command-family reference. |
| [Git Cheat Sheet](https://git-scm.com/cheat-sheet) | Fast everyday command lookup. |
| [GitHub Git Guide](https://github.com/git-guides) | Practical workflow from Git basics through GitHub collaboration and pull requests. |
| [GitHub Git Cheat Sheet](https://training.github.com/downloads/github-git-cheat-sheet/) | Compact command reference for GitHub-oriented work. |
| [GitHub Git Basics](https://docs.github.com/en/get-started/git-basics) | Setup, credentials, remotes, workflows and ignore-file guidance. |
| [Learn Git Branching](https://github.com/pcottle/learnGitBranching) | Visualizes the commit graph and teaches Git through interactive levels and sandbox exercises. |
| [rafaballerini/GitTutorial](https://github.com/rafaballerini/GitTutorial) | Community tutorial reference found during repository research. |
| [WeMakeDevs/github-tutorial](https://github.com/WeMakeDevs/github-tutorial) | Community GitHub workflow reference found during repository research. |

## Design decisions for this manual

- **Terminal first:** commands and terminal output are the primary teaching surface.
- **Scenario driven:** recovery, collaboration, branching and everyday workflows are easier to remember as recipes.
- **Mental models:** working tree → index → commit and branch topology are explained before command memorization.
- **Fast navigation:** chapters are split into focused modules and exposed through the React reader.
- **Recovery is first-class:** undo, stash, reflog and bisect are included because real engineering work eventually needs them.
- **No giant textbook:** the site is designed as an engineer's daily reference, with links to deeper external references when required.

## Research note

The research pass also surfaced the official Git learning ecosystem's Pro Git book, videos, cheat sheet and external tutorial collection. The current Git reference documents command groups including setup/configuration, snapshotting, branching/merging, sharing/updating and inspection/comparison.
