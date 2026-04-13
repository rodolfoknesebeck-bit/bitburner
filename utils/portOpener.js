/** @param {NS} ns */
export async function main(ns) {
const allServ = [
    "n00dles", "foodnstuff", "sigma-cosmetics", "joesguns", "hong-fang-tea", 
    "harakiri-sushi", "iron-gym", "darkweb", "max-hardware", "zer0", 
    "nectar-net", "CSEC", "neo-net", "phantasy", "omega-net", "silver-helix", 
    "the-hub", "netlink", "johnson-ortho", "avmnite-02h", "comptek", 
    "crush-fitness", "catalyst", "syscore", "I.I.I.I", "rothman-uni", 
    "summit-uni", "zb-institute", "lexo-corp", "alpha-ent", "millenium-fitness", 
    "rho-construction", "aevum-police", "galactic-cyber", "aerocorp", 
    "global-pharm", "snap-fitness", "omnia", "unitalife", "deltaone", 
    "defcomm", "solaris", "icarus", "univ-energy", "zeus-med", "infocomm", 
    "taiyang-digital", "zb-def", "nova-med", "titan-labs", "applied-energetics", 
    "microdyne", "run4theh111z", "fulcrumtech", "stormtech", "helios", 
    "vitalife", "kuai-gong", "omnitek", "4sigma", "clarkinc"
];

for (const eachServ of allServ){
await ns.brutessh(eachServ);
await ns.ftpcrack(eachServ);
await ns.relaysmtp(eachServ);
await ns.httpworm(eachServ);
await ns.sqlinject(eachServ);
await ns.nuke(eachServ);
ns.tprint(`All ports are open on: ${eachServ}`);
}}
