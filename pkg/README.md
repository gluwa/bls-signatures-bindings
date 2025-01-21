# TS Bindings for `no_std` BLS Signatures

Creates bindings for https://github.com/gluwa/bls-signatures.

## Installation
```bash
npm install bls-signatures-bindings
```

## Usage
Import necessary structures from the package and use them as needed.
```typescript
import { WasmPrivateKey } from 'bls_signatures_bindings';

async function main() {
    const seed = new Uint8Array(32);
    console.log("seed", seed);

    const privateKey = WasmPrivateKey.generate(seed);
    console.log("privateKey", privateKey.as_bytes());

    const publicKey = privateKey.public_key();
    console.log("publicKey", publicKey.as_bytes());

    const message = new TextEncoder().encode("Hello, World!");
    const signature = privateKey.sign(message);

    const isValid = publicKey.verify(signature, message);
    console.log("Signature valid:", isValid);
}
```

Compile it with `tsc` and run with `dist/index.js`. 
