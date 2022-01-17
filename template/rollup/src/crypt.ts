import base64js from "base64-js";

function base64_decrypt(val: string): Uint8Array {
  const byteArr = base64js.toByteArray(val);

  return byteArr;
}

export { base64_decrypt };
