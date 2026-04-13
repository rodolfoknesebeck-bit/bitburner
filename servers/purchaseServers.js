/** @param {NS} ns */
export async function main(ns) {

  // section to inform player of purchase (hardcoded) and query for purchase

  const playerData = ns.getPlayer();
  let pMoney = playerData.money;
  const servSize = 1024;
  ns.tprint(ns.formatNumber(pMoney));
  let serverCost = (ns.getPurchasedServerCost(servSize));
  ns.tprint('A 1024GB server costs ', ns.formatNumber(serverCost), ' moneys!');
  let possiblePurch = Math.trunc(pMoney / serverCost);
  let buyPrompt = await ns.prompt(`You can buy ${possiblePurch} servers right now. Buy?`);
  if (buyPrompt === true) {
    ns.tprint(`You have chosen to purchase ${possiblePurch} servers. Await code update`);
    //section to purchase, nested in IF with a bonus FOR
    for (let i = 0; i < possiblePurch; ++i) {
      ns.purchaseServer(`auxServ-${i}`, servSize);
    }

  }
}
