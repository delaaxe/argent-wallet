import { CircularProgress } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { getBalance, getGuardianCount } from "./guardian.service";
import { getERC20Balances } from "./ethplorer.service";

export const Wallet = () => {
  const { address } = useParams<{ address?: string }>();
  const [balance, setBalance] = useState<string>();
  const [guardianCount, setGuardianCount] = useState<number>();
  const [erc20Balances, setErc20Balances] = useState<Record<string, string>>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    (async () => {
      if (!address) {
        return;
      }
      try {
        setErc20Balances(await getERC20Balances(address));
      } catch (e) {
        setError(e.message || e.toString());
      }
    })();
  }, [address]);

  useEffect(() => {
    (async () => {
      if (!address) {
        return;
      }
      try {
        setBalance(await getBalance(address));
      } catch (e) {
        setError(e.message || e.toString());
      }
    })();
  }, [address]);

  useEffect(() => {
    (async () => {
      if (!address) {
        return;
      }
      try {
        setGuardianCount(await getGuardianCount(address));
      } catch (e) {
        setError(e.message || e.toString());
      }
    })();
  }, [address]);

  if (error) {
    return (
      <Alert severity="error" style={{ marginTop: 30 }}>
        {error}
      </Alert>
    );
  }

  return (
    <>
      <h4>Wallet balance</h4>
      <div>
        {balance === undefined ? <CircularProgress /> : <>ETH {balance}</>}
      </div>
      <h4>Number of guardians</h4>
      <div>
        {guardianCount === undefined ? <CircularProgress /> : guardianCount}
      </div>
      <h4>ERC20 tokens</h4>

      {erc20Balances === undefined ? (
        <CircularProgress />
      ) : (
        Object.entries(erc20Balances).map(([symbol, balance]) => (
          <div key={symbol}>
            {symbol} {balance}
          </div>
        ))
      )}
    </>
  );
};
