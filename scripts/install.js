const args = ["install"];
const options = {
  stdio: "inherit",
  cwd: "./client",
  shell: true
};

require("child_process").spawn("yarn", args, options);
