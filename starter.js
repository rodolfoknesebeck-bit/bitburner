//       runs whatever script is hardcodded. seems redundant for now but its nice to have for when have lots of scripts to run when starting a node

/** @param {NS} ns */
export async function main(ns) {
ns.run("hack/threadcounter.js");
}
