import { SmartContract } from "./SmartContract";
import DAI_ABI from "./abi/dai.json";

const DAI_ADDRESS = "0x6B175474E89094C44Da98b954EedeAC495271d0F";

(async () => {
  // Instantiate smart contract object.
  const contract = new SmartContract(DAI_ADDRESS, JSON.stringify(DAI_ABI));

  // If the difference between `fromBlock` and `toBlock` is too large,
  // your console may overwhelm with events.
  const fromBlock = 13134800;
  const toBlock = 13134820;

  // All Events
  const allEvents = await contract.getEvents({
    fromBlock,
    toBlock,
  });
  console.log("All Events Count:", allEvents.length);

  // Transfer Events Only
  const transferEvents = await contract.getEvents({
    fromBlock,
    toBlock,
    eventType: "Transfer",
  });
  console.log("Transfer Events Count:", transferEvents.length);

  // Latest Event generated by DAI's contract.
  console.log("Latest Event:", allEvents.pop());
})();
