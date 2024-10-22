import{aD as e,aE as s,aw as i,ab as o}from"./main-_gsLZWMl.js";import"./wScoge-z36Oeizf.js";const c=`Ethereum Signed Message:
`;function u(t,n){const r=typeof t=="string"?e(t):t.raw instanceof Uint8Array?t.raw:s(t.raw),a=e(`${c}${r.length}`);return i(o([a,r]),n)}export{u as hashMessage};
