/* tslint:disable */
/* eslint-disable */
export class WasmPrivateKey {
  free(): void;
  /**
   * @param {Uint8Array} seed
   * @returns {WasmPrivateKey}
   */
  static generate(seed: Uint8Array): WasmPrivateKey;
  /**
   * @param {Uint8Array} bytes
   * @returns {WasmPrivateKey}
   */
  static from_bytes(bytes: Uint8Array): WasmPrivateKey;
  /**
   * @param {Uint8Array} message
   * @returns {WasmSignature}
   */
  sign(message: Uint8Array): WasmSignature;
  /**
   * @returns {WasmPublicKey}
   */
  public_key(): WasmPublicKey;
  /**
   * @returns {Uint8Array}
   */
  as_bytes(): Uint8Array;
}
export class WasmPublicKey {
  free(): void;
  /**
   * @param {Uint8Array} bytes
   * @returns {WasmPublicKey}
   */
  static from_bytes(bytes: Uint8Array): WasmPublicKey;
  /**
   * @param {WasmSignature} signature
   * @param {Uint8Array} message
   * @returns {boolean}
   */
  verify(signature: WasmSignature, message: Uint8Array): boolean;
  /**
   * @returns {Uint8Array}
   */
  as_bytes(): Uint8Array;
}
export class WasmSignature {
  free(): void;
  /**
   * @param {Uint8Array} bytes
   * @returns {WasmSignature}
   */
  static from_bytes(bytes: Uint8Array): WasmSignature;
  /**
   * @returns {Uint8Array}
   */
  as_bytes(): Uint8Array;
}
