//          get server total ram, get script size, get total times script can be run (threads), runs worm with number of threads while saving space for testing


/** @param {NS} ns */
export async function main(ns) {
//calculate ram
let sV = ns.getScriptRam("hack/wormV1.js");
ns.tprint('This script costs: ', sV,'GB to run.')
let homeRam = ns.getServerMaxRam("home");
let usedRam = ns.getServerUsedRam("home");
ns.tprint('Current home max capacity is: ', homeRam, 'GB.');
let freeRam = homeRam - usedRam - 10;
ns.tprint('We save 10gb for testing, so free ram is: ', freeRam,'GB.')
let sThreads = Math.trunc(freeRam/sV);
ns.tprint('So the number of threads to run should be: ', sThreads);

ns.tprint('Running the wormV1.js')
ns.run("hack/wormV1.js", sThreads)
}
