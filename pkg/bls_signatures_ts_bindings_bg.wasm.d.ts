/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export function __wbg_wasmprivatekey_free(a: number, b: number): void;
export function __wbg_wasmpublickey_free(a: number, b: number): void;
export function __wbg_wasmsignature_free(a: number, b: number): void;
export function wasmprivatekey_generate(a: number, b: number, c: number): void;
export function wasmprivatekey_from_bytes(a: number, b: number, c: number): void;
export function wasmprivatekey_sign(a: number, b: number, c: number): number;
export function wasmprivatekey_public_key(a: number): number;
export function wasmprivatekey_as_bytes(a: number, b: number): void;
export function wasmpublickey_from_bytes(a: number, b: number, c: number): void;
export function wasmpublickey_verify(a: number, b: number, c: number, d: number): number;
export function wasmpublickey_as_bytes(a: number, b: number): void;
export function wasmsignature_from_bytes(a: number, b: number, c: number): void;
export function wasmsignature_as_bytes(a: number, b: number): void;
export function __wbindgen_add_to_stack_pointer(a: number): number;
export function __wbindgen_malloc(a: number, b: number): number;
export function __wbindgen_free(a: number, b: number, c: number): void;
