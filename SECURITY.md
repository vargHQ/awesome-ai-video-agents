# Security

This repository holds markdown, a JSON mirror of a public catalog and two small Bun scripts. It contains no secrets and runs nothing on install.

**Reporting.** A listed skill that does something harmful (exfiltrates keys, runs `curl | bash`, downloads executables, bundles pirated media), a card that links to malware, or a problem in the publish flow: email **security@varg.ai**, or open a private security advisory on this repository. Please do not open a public issue for an active risk. We answer within 3 working days and take the card down first, ask questions second.

**What the sync does.** `scripts/sync.ts` fetches `https://varg.ai/how-to/catalog.json` over HTTPS and writes files in this repo. It has no credentials and no write access to varg. The daily GitHub Action commits with the repository's own token.

**Scope of the standard.** Listed skills must keep secrets out of files, call known hosts only, pin versions and ship no post-install hooks. See [CONTRIBUTING.md](CONTRIBUTING.md#the-standard-what-a-listed-skill-carries). Reports about a skill's own code go to that skill's repository as well; we will help you reach the author.
