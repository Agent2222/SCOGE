import{aB as e,aC as s,at as i,a8 as o}from"./main-BO56CHZl.js";import"./wScoge-BfExBSv1.js";const c=`Ethereum Signed Message:
`;function u(t,n){const r=typeof t=="string"?e(t):t.raw instanceof Uint8Array?t.raw:s(t.raw),a=e(`${c}${r.length}`);return i(o([a,r]),n)}export{u as hashMessage};
