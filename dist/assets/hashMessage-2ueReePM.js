import{aD as e,aE as s,aw as i,ab as o}from"./main-Dp4agH9k.js";import"./wScoge-CouMP70I.js";const c=`Ethereum Signed Message:
`;function u(t,n){const r=typeof t=="string"?e(t):t.raw instanceof Uint8Array?t.raw:s(t.raw),a=e(`${c}${r.length}`);return i(o([a,r]),n)}export{u as hashMessage};
