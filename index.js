#!/usr/bin/env node

const fs = require("fs");
const YAML = require("yaml");

const yamlFileName = process.argv[2];

if (yamlFileName) {

  const file = fs.readFileSync(yamlFileName, "utf8");

  const yamlAsObj = YAML.parse(file);

  const keys = Object.keys(yamlAsObj);

  let export_string = "";

  keys.forEach((key) => {
    export_string = key + "=" + yamlAsObj[key] + " " + export_string;
  });

  process.stdout.write(export_string);

} else {
  console.log("ERROR: CLI requires a YAML input file, e.g. `yec sample.yaml`");
  process.exit(1);
}
