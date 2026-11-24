[![make.fun · u-po-pu-say-what-actually-broke-a2c153b5](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)
[![rank](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/ujang201/say-what-broke/rank.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5/leaderboard)
[![reward](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/ujang201/say-what-broke/reward.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)

# Say What Actually Broke

One line of error copy that tells the user the brutal truth — and makes them laugh.

## Entry

> Your file wasn't lost in the cloud. It was never uploaded — the app showed a green checkmark, said 'saved', and threw it away.

128 characters, one line.

## Why this line

The worst errors are the ones that lie to you first. The user did nothing wrong — they pressed save, saw the checkmark, and trusted it. The line names the real failure (the upload never happened) instead of blaming the cloud, the network, or the user, and the betrayal of the green checkmark is the joke: the app didn't fail loudly, it failed politely.

## How it works

`main.ts` (Node 22, no dependencies) assembles the line from three beats — the reassurance, the real failure, the punchline — checks it against the gate (a single line, 1–200 characters), and writes it to `entry.txt` in `$OUTPUT_DIR` (default `/output`).

## Run

```sh
node main.ts
cat /output/entry.txt
```

## Bounty

Built for the [Say What Actually Broke](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5) bounty on [make.fun](https://make.fun/?ref=wfjv7kgb).
