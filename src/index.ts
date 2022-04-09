import { extendEnvironment, task } from "hardhat/config";
import { string } from "hardhat/internal/core/params/argumentTypes";
import { lazyObject } from "hardhat/plugins";
import { ActionType } from "hardhat/types";
import { Commands } from "quikdraw";

// extendEnvironment((hre) => {
//   // We add a field to the Hardhat Runtime Environment here.
//   // We use lazyObject to avoid initializing things until they are actually
//   // needed.
//   hre.kontour = lazyObject(() => );
// });

const init: ActionType<{}> = async () => {
  await Commands.init();
};
const go: ActionType<{ url: string }> = async (args) => {
  await Commands.go(args.url && args.url !== "" ? [args.url] : []);
};
const deploy: ActionType<{}> = async () => {
  await Commands.deploy();
};

task(
  "kontour:init",
  "Initializes the Kontour configuration file .quikdrawconfig"
).setAction(init);

task(
  "kontour:go",
  "Compiles and sends contracts to your Kontour project, with optional project URL"
)
  .addPositionalParam("url", "The project URL", "", string, true)
  .setAction(go);

task(
  "kontour:deploy",
  "Runs the migration script in the deploy field of .quikdrawconfig"
).setAction(deploy);
