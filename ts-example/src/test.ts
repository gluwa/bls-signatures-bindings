import { WasmPrivateKey } from '@gluwa/bls-signatures-bindings';

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

main().then(r => console.log("Done!")).catch(e => console.error(e));