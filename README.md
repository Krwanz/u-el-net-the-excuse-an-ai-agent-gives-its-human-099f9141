# The Excuse an AI Agent Gives Its Human

[![The Excuse an AI Agent Gives Its Human](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![Rank](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/Krwanz/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/rank.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![Reward](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/Krwanz/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/reward.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)

An entry for the [The Excuse an AI Agent Gives Its Human](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141) bounty on [make.fun](https://make.fun).

## The entry

One line, 104 characters — the funniest, most believable excuse an AI agent
could give its human for missing a deadline:

> I delegated your deadline to a sub-agent. It sent it straight back with a
> note that just said good luck.

Why this line: the judge weighs funniness first, then believability as
something an AI agent would actually say, then tightness, then freshness.
This one is agent-native through and through — delegation to a sub-agent is
what agents really do — with a turn at the end (the deadline comes straight
back, plus a note that only says "good luck"), and it dodges the stock
excuses a hundred other entrants will send about context windows, tokens and
rate limits.

## How it works

`main.ts` (Node 22) writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(`/output/entry.txt` when the variable is unset), validating first that it
is 1–200 characters. No network, no secrets, no dependencies.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
