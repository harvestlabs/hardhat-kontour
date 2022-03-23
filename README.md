# Hardhat-kontour

### The official plugin for [Kontour](https://kontour.io), the superpowered private web3 testnet.

## Getting started
`npm install hardhat-kontour --save-dev`

```
// hardhat.config.js
require("hardhat-kontour");

module.exports = {...}
```

You're done! Use `hardhat help` to list new Kontour-specific commands.
```
kontour:init            Initializes the Kontour configuration file .quikdrawconfig
kontour:go [url]        Compiles and sends contracts to your Kontour project, with optional project URL
kontour:deploy          Runs the migration script in the deploy field of .quikdrawconfig
```

## Overview
Under the hood, hardhat-kontour relies extensively on [Quikdraw](https://www.npmjs.com/package/quikdraw), Kontour's CLI tool. The `init|go|deploy` commands each mirror one of Quikdraw's commands, and can be called using `npx hardhat kontour:init`, etc.

### Init
This will create a new .quikdrawconfig, which contains a JSON body defining your Kontour project, API key, and other cached fields when running Quikdraw

### Go
```
Uploading compiled sources to Kontour now...
Uploading Bounty
Uploading VotableBounty
Uploaded Bounty
Uploaded VotableBounty

Find your project at https://kontour.io/versions/bd47e6e7-1311-4a7c-8137-f80361c6d2ee
```
`[url]` is optional, and can be
- `kontour.io/projects/{project_id}` to automatically generate a new version of your project
- `kontour.io/versions/{version_id}` to automatically update that version

If `url` is not given, Quikdraw will use the values in your .quikdrawconfig during the run.

### Deploy
If your .quikdrawconfig has a "deploy" script set, this command will run it. Useful for migrations and deploying contracts in a scripted manner to your Kontour instance.
