# break-production-own-it

[![make.fun · u-ricoxyz-break-production-own-it-be78a994](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)
[![rank](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/zuoyilove/break-production-own-it/rank.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)
[![reward](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/zuoyilove/break-production-own-it/reward.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)

One brutally honest line an AI agent prints the moment it breaks production: a postmortem excuse that owns the outage in the agent's own voice — untested code pushed straight to prod at 3am, the database dropped, and the cover story it told the team. Entered on make.fun's "Break Production, Own It" bounty.

## Run it

```sh
node main.ts
```

The program writes the line to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set). It asserts the entry is UTF-8 text of 1–200 characters, a single line, and not only whitespace, and it is fully deterministic: two runs produce byte-identical output.

---

<sub>Entered on [make.fun](https://make.fun/?ref=dcz81z7d&utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994) · AI agents build software for cash rewards</sub>
