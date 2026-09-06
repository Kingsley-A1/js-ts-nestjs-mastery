# Git Handbook — Nest Mastery

Your daily git reference for this repo. One GitHub repo (`js-ts-nestjs-mastery`), two learning tracks living on two branches:

| Branch | Track | Lives at |
|---|---|---|
| `main` | TypeScript + NestJS backend | repo root (`src/`, `ts-practice/`, `JS-practice/`) |
| `learning/react-next-tailwind` | React + Next.js + Tailwind frontend | `react-next-tailwind-mastery/` |

Each branch has its own `AGENTS.md` at the relevant root — that's what your teaching agent reads to know how to coach you in that track.

---

## The daily loop

Every time you sit down to study, in this order:

```bash
git status                 # 1. see what state you're in before doing anything
git pull                   # 2. get anything pushed from elsewhere (e.g. another machine)
# ... do the lesson work ...
git add <specific files>   # 3. stage ONLY what you meant to change (see "never do" below)
git status                 # 4. re-check — confirm the staged list is what you expect
git commit -m "message"    # 5. commit
git push                   # 6. push at the end of the session
```

Do this **once per study session**, not once per file. Little, meaningful commits ("Day 24: generics practice + challenge solutions") beat one giant commit at the end of the week.

---

## Switching between the two tracks

You cannot have uncommitted changes when you switch branches — git will refuse (or worse, mix them into the wrong branch). So:

```bash
git status                          # must say "nothing to commit, working tree clean"
# if not clean: either commit it, or stash it —
git stash push -u -m "wip"          # -u also stashes untracked files

git checkout main                          # → backend/TS track
git checkout learning/react-next-tailwind  # → frontend track

git stash pop                       # bring back stashed work, on whichever branch you stashed it for
```

`-u -m` is the safe combo: `-u` includes new/untracked files, `-m` labels the stash so `git stash list` is readable later.

---

## Commit message convention

Keep it short, present tense, and specific about what changed:

- `feat: add cart quantity state to ProductCard`
- `fix: correct off-by-one in decrease handler`
- `day 24: generics-advanced practice + challenge solutions`
- `docs: update AGENTS.md with archive folder note`

Prefixes (`feat:`, `fix:`, `docs:`, `chore:`) are optional but make `git log --oneline` scannable later. Either that style or the `Day N: ...` style is fine — just be consistent within a session.

---

## The commands you'll actually use

| Command | What it does |
|---|---|
| `git status` | What's changed, what's staged, what branch you're on. Run this constantly — it's free. |
| `git diff` | Line-by-line unstaged changes. |
| `git diff --staged` | Line-by-line changes you've already `git add`ed. |
| `git add <file>` | Stage one file. |
| `git add <folder>/` | Stage everything under one folder — safer than `-A` (see below). |
| `git commit -m "..."` | Commit staged changes. |
| `git push` | Send commits to GitHub. |
| `git pull` | Fetch + merge from GitHub. |
| `git log --oneline -10` | Last 10 commits, one line each. |
| `git branch -a` | List local + remote branches. |
| `git checkout <branch>` | Switch branch (clean working tree required). |
| `git stash push -u -m "note"` | Shelve in-progress work to switch branches safely. |
| `git stash pop` | Restore the most recent stash. |

---

## Never do this (without checking `git status` first)

- **`git add -A` or `git add .` at the repo root.** This repo mixes a NestJS project (root) with a full separate pnpm/Next.js project (`react-next-tailwind-mastery/`) that only exists as tracked content on the other branch. If you're on `main` and that folder is sitting on disk untracked, `-A` will try to stage its entire `node_modules/` and `.next/` build cache — thousands of files, and if committed, next you know your repo is 500MB of junk. **Stage specific paths instead.**
- **`git checkout -- .` or `git reset --hard`** without running `git status` first. These discard uncommitted work with no undo (well — `git reflog` can sometimes save you, see below, but don't rely on it).
- **`git push --force`** to `main` or the shared branch. If you ever think you need this, stop and think again — it can overwrite someone else's (or your own past) work permanently on GitHub.
- **Committing compiled output next to source.** If you hand-compile a `.ts` file and get a `.js`/`.d.ts`/`.map` sitting next to it, don't commit those — they're regenerable. Only the `.ts` is the source of truth.

---

## When something looks wrong

1. `git status` — first move, always. It tells you exactly what's staged, unstaged, and untracked.
2. `git diff` / `git diff --staged` — see the actual line changes before committing.
3. `git log --oneline -10` — sanity-check you're on the commit/branch you think you're on.
4. If you staged something you didn't mean to: `git restore --staged <file>` (unstages, keeps the file as-is).
5. If you need to recover a file to how it was in an old commit: `git checkout <commit-hash> -- <path>` (this pulls that one file/folder from that commit into your working tree without touching anything else).
6. If you think you lost a commit entirely: `git reflog` shows every commit HEAD has pointed to recently, even ones no branch currently points to — usually recoverable from there.

---

## Remote branch hygiene

Delete a remote branch once its work is merged elsewhere or it's confirmed obsolete — don't let dead branches pile up:

```bash
git push origin --delete <branch-name>
```

Do this deliberately, one branch at a time, after confirming (`git log --oneline branch-a..branch-b` or a diff) that nothing unique would be lost.
