import { ITransaction } from "types";

export const groupTransactionsByDate = (transactions: Array<ITransaction>) => {
  const groupedTransactions: {
    [key: string]: Array<ITransaction>;
  } = {};

  transactions.forEach((txn) => {
    try {
      const [date] = txn.date.toISOString().split("T");
      if (date in groupedTransactions) {
        groupedTransactions[date].push(txn);
      } else {
        groupedTransactions[date] = [txn];
      }
    } catch {}
  });

  return groupedTransactions;
};
