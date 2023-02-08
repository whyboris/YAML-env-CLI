[![npm](https://img.shields.io/npm/v/yaml-env-cli)](https://www.npmjs.com/package/typescript-call-graph)

# YAML-env-CLI

A **CLI** that does only one thing: outputs the contents of a `YAML` file (`.yml` or `.yaml`) as a _string_ (so as to help you load each key/value pair as environment variables).

## Install

```sh
npm install -g yaml-env-cli
```

## How to use

For example, you have a file `staging.yaml`[^1]:

```yaml
ENVIRONMENT: "staging"
API_URL: "https://lol.hi"
API_KEY: "69sike420"
```

Running `yec staging.yaml` will output the _string_:

```txt
API_KEY=69sike420 API_URL=https://lol.hi ENVIRONMENT=staging
```

This is useful because you can instead run[^2]:

```sh
export `yec staging.yaml`
```

Now all the secrets in `staging.yaml` will be available in your terminal as environment variables.

So if you have a `main.go` script that requires certain variables, you can run:

```sh
export `yec staging.yaml` && go run main.go
```

## Tip

To see what environment variables are set, run [`printenv`](https://man7.org/linux/man-pages/man1/printenv.1.html) (this is just a regular shell command).

## Developing

Running `npm start` reads the `sample.yaml`, exports each key/value pair as environment variables, and runs `test.js` which will print the three[^3] set variables.

_Note_: `npm start` will not update the environment variables except for the execution of `test.js`

Adjust the script to your liking by editing `index.js` and then install your _custom version_ of `yec` command with `npm run global`

## Motivation

Launching Cloud Functions to GCP is easy with `--env-vars-file=production.yml` but when you try to use the _Functions Framework_ you now have to figure out a way to get those environment variables loaded. Perhaps you use a shell script which duplicates the contents of the `.yml` file, but it's annoying.

[^1]: _Note_ that the CLI expects a _flat_ file with no nesting
[^2]: _Note_ this _CLI_ might not work on _Windows_
[^3]: _Note_ that the three keys are hardcoded for convenience
