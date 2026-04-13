//I fucked up ay, gotta start again
/** @param {NS} ns */
export async function main(ns) {

const p1 = "hack/threadcounter.js";
const p2 = "hack/wormV1.js";
for (let i = 0; i < 25; i++){
  
ns.scp([p1,p2], `auxServ-${i}`)
ns.tprint(`Copied ${p1}, and ${p2} to auxServ-${i}`);
ns.exec(p1,`auxServ-${i}`);
}
}
