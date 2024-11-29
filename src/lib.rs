pub use bls_signatures::key::{PrivateKey, PublicKey, Serialize};
pub use bls_signatures::signature::{
    aggregate as bls_aggregate, hash, verify, verify_agg_message,
    verify_messages as bls_verify_messages, Signature,
};

extern crate alloc;
use alloc::vec::Vec;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct WasmPrivateKey(PrivateKey);

#[wasm_bindgen]
pub struct WasmPublicKey(PublicKey);

#[wasm_bindgen]
pub struct WasmSignature(Signature);

#[wasm_bindgen]
impl WasmPrivateKey {
    #[wasm_bindgen]
    pub fn generate(seed: &[u8]) -> Result<WasmPrivateKey, JsError> {
        if seed.len() < 32 {
            return Err(JsError::new("Seed must be at least 32 bytes"));
        }
        Ok(WasmPrivateKey(PrivateKey::new(seed)))
    }

    #[wasm_bindgen]
    pub fn from_bytes(bytes: &[u8]) -> Result<WasmPrivateKey, JsError> {
        PrivateKey::from_bytes(bytes)
            .map(WasmPrivateKey)
            .map_err(|_| JsError::new("Invalid private key bytes"))
    }

    #[wasm_bindgen]
    pub fn sign(&self, message: &[u8]) -> WasmSignature {
        WasmSignature(self.0.sign(message))
    }

    #[wasm_bindgen]
    pub fn public_key(&self) -> WasmPublicKey {
        WasmPublicKey(self.0.public_key())
    }

    #[wasm_bindgen]
    pub fn as_bytes(&self) -> Vec<u8> {
        self.0.as_bytes()
    }
}

#[wasm_bindgen]
impl WasmPublicKey {
    #[wasm_bindgen]
    pub fn from_bytes(bytes: &[u8]) -> Result<WasmPublicKey, JsError> {
        PublicKey::from_bytes(bytes)
            .map(WasmPublicKey)
            .map_err(|_| JsError::new("Invalid public key bytes"))
    }

    #[wasm_bindgen]
    pub fn verify(&self, signature: &WasmSignature, message: &[u8]) -> bool {
        self.0.verify(signature.0, message)
    }

    #[wasm_bindgen]
    pub fn as_bytes(&self) -> Vec<u8> {
        self.0.as_bytes()
    }
}

#[wasm_bindgen]
impl WasmSignature {
    #[wasm_bindgen]
    pub fn from_bytes(bytes: &[u8]) -> Result<WasmSignature, JsError> {
        Signature::from_bytes(bytes)
            .map(WasmSignature)
            .map_err(|_| JsError::new("invalid signature bytes"))
    }

    #[wasm_bindgen]
    pub fn as_bytes(&self) -> Vec<u8> {
        self.0.as_bytes()
    }
}
