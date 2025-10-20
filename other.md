# TS Bindings for `no_std` BLS Signatures

Creates bindings for <https://github.com/gluwa/bls-signatures>. `./pkg` needs to be published to npm

## Generating bindings

Install `wasm-pack`

```bash
cargo install wasm-pack
```

Run `wasm-pack` with `nodejs` target

```bash
wasm-pack build --target nodejs
```

This will generate a `pkg` directory with the bindings. The usage example within this project is shown below.  

## Usage

Inside `ts-example` there is an example of how to use the bindings. You should additionally make a symbolic link inside the dir.

```bash
ln -s ../pkg ./pkg
```

After that you can build the project with

```bash
npm run build
```

and then run it

```bash
npm start
```
