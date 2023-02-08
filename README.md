# YAML-env-CLI

A **CLI** that does only one thing: outputs the contents of a `YAML` file (`.yml` or `.yaml`) as a _string_ (so as to help you load each key/value pair as environment variables).

## Install

`npm i -g yec`

## How to use

For example your `staging.yaml` file:

```yaml
ENVIRONMENT: "staging"
API_URL: "https://lol.hi"
API_KEY: "69sike420"
```

_Note_: the CLI expects a _flat_ file with no nesting.

Running `yec staging.yaml` will output the _string_ `API_KEY=69sike420 API_URL=https://lol.hi ENVIRONMENT=staging`

This is useful because you can instead run this:

```sh
export `yec staging.yaml`
```

Now all the secrets in `staging.yaml` will be exported as environment variables.

So if you have a `main.go` script that requires certain variables, you can just:

```sh
export `yec staging.yaml` && go run main.go
```

## Tip

To see what environment variables are set, run [`printenv`](https://man7.org/linux/man-pages/man1/printenv.1.html) (this is just a regular shell command).

## Developing

Running `npm start` reads the `sample.yaml`, exports it as environment variables, and runs `test.js` which will print the three set variables.

_Note_: `npm start` will not update the environment variables except for the execution of `test.js`

Adjust the script to your liking by editing `index.js` and then install your _custom version_ of `yec` command with `npm run global`c

## Motivation

Launching Cloud Functions to GCP is easy with `--env-vars-file=production.yml` but when you try to use the _Functions Framework_ you now have to figure out a way to get those environment variables loaded. Perhaps you use a shell script which duplicates the contents of the `.yml` file, but it's annoying.
