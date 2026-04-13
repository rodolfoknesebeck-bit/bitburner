
//          hacks the target, shitty because it needs hardcoding of the target

export async function main(ns) {
  let hTarget = ("foodnstuff");
  while (true) {
    await ns.weaken(hTarget);
    await ns.weaken(hTarget);
    await ns.grow(hTarget);
    await ns.grow(hTarget);
    await ns.hack(hTarget);
  }
}
