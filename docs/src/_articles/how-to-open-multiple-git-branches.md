---
title: How to work on multiple git branches at the same time 
date: "2022-03-18T09:18:03.284Z"
description: A short description on using git worktrees
type: blog
---

```
git worktree add /path/to/empty/folder <branch_you_would_like_to_check_out>
```

## A bit more detail
According to the [docs](https://git-scm.com/docs/git-worktree) - `A git repository can support multiple working trees, allowing you to check out more than one branch at a time.`

If you have two branches:

```
- feature_monday
- feature_sunday
```

And your repo is at

```
~/workspaces/my_monorepo
```

And you currently have `feature_monday` checked out - you can create a new folder called `~/worktree/` and inside of `~/workspaces/my_monorepo`:

```
git worktree add ~/worktree/ feature_sunday
```

Git will clone the repo for you into the `~/worktree` folder, and if you `cd` into the `~/worktree/` folder you will see that `feature_sunday` branch is checked out.