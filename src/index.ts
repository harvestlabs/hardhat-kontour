import { extendEnvironment, task } from "hardhat/config";
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
const go: ActionType<{}> = async () => {
  await Commands.go();
};
const deploy: ActionType<{}> = async () => {
  await Commands.deploy();
};

task("kontour:init", "Initializes a Kontour configuration file").setAction(
  init
);

task(
  "kontour:go",
  "Compiles and sends contracts to your Kontour instance"
).setAction(go);

task(
  "kontour:deploy",
  "Runs the migration script in the deploy field of .quikdrawconfig"
).setAction(deploy);
