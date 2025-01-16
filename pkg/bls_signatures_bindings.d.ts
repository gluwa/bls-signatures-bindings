/* tslint:disable */
/* eslint-disable */
export class WasmPrivateKey {
  private constructor();
  free(): void;
  static generate(seed: Uint8Array): WasmPrivateKey;
  static from_bytes(bytes: Uint8Array): WasmPrivateKey;
  sign(message: Uint8Array): WasmSignature;
  public_key(): WasmPublicKey;
  as_bytes(): Uint8Array;
}
export class WasmPublicKey {
  private constructor();
  free(): void;
  static from_bytes(bytes: Uint8Array): WasmPublicKey;
  verify(signature: WasmSignature, message: Uint8Array): boolean;
  as_bytes(): Uint8Array;
}
export class WasmSignature {
  private constructor();
  free(): void;
  static from_bytes(bytes: Uint8Array): WasmSignature;
  as_bytes(): Uint8Array;
}
