import { web3 } from "./guardian.service";

const apiUrl = "https://api.ethplorer.io";

export const getERC20Balances = async (
  address: string
): Promise<Record<string, string>> => {
  const params = new URLSearchParams({ apiKey: "freekey" });
  const url = `${apiUrl}/getAddressInfo/${address}?${params}`;
  const response = await fetch(url);
  const result = await response.json();
  if (!result?.tokens) {
    throw new Error("Cannot find ERC20 token balances");
  }
  const balances = result.tokens.map(({ balance, tokenInfo }: any) => [
    tokenInfo.symbol,
    web3.utils.fromWei(balance.toString()),
  ]);
  console.log("erc20", balances);
  return Object.fromEntries(balances);
};
