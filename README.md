# TS Bindings for `no_std` BLS Signatures

Creates bindings for https://github.com/gluwa/bls-signatures. `./pkg` needs to be published to npm

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