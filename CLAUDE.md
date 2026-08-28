# KulmanLab landing site

## Dev

```
npm run dev
```

## Workflow rules

**Never commit without explicit user approval.** Always wait for the user to say "commit" before running `git commit`. Do not commit automatically after completing a task, even if it's a natural follow-on to a change the user already approved committing — approval is per-commit, not standing.

**"commit" authorises exactly one commit and does not carry forward.** It does not cover the next task, the next instruction, or a follow-up fix to work that was already committed. A correction to earlier work ("call it X instead", "rename that") is not a request to commit the correction. When a task is finished and no one has asked for a commit in the message in front of you, say the work is done and uncommitted, then stop.

If a commit is made without being asked, `git reset --soft HEAD~1` undoes it while keeping every change staged.
