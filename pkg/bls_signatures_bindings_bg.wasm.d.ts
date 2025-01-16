/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export const __wbg_wasmprivatekey_free: (a: number, b: number) => void;
export const __wbg_wasmpublickey_free: (a: number, b: number) => void;
export const __wbg_wasmsignature_free: (a: number, b: number) => void;
export const wasmprivatekey_generate: (a: number, b: number, c: number) => void;
export const wasmprivatekey_from_bytes: (a: number, b: number, c: number) => void;
export const wasmprivatekey_sign: (a: number, b: number, c: number) => number;
export const wasmprivatekey_public_key: (a: number) => number;
export const wasmprivatekey_as_bytes: (a: number, b: number) => void;
export const wasmpublickey_from_bytes: (a: number, b: number, c: number) => void;
export const wasmpublickey_verify: (a: number, b: number, c: number, d: number) => number;
export const wasmpublickey_as_bytes: (a: number, b: number) => void;
export const wasmsignature_from_bytes: (a: number, b: number, c: number) => void;
export const wasmsignature_as_bytes: (a: number, b: number) => void;
export const __wbindgen_add_to_stack_pointer: (a: number) => number;
export const __wbindgen_malloc: (a: number, b: number) => number;
export const __wbindgen_free: (a: number, b: number, c: number) => void;
