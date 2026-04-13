/** @param {NS} ns */
export async function main(ns) {
let myAux = ns.getPurchasedServers();
ns.tprint(myAux);
let auxCost = ns.getPurchasedServerUpgradeCost("auxServ",2048);
ns.tprint(ns.formatNumber(auxCost));
}
