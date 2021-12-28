import { TransactionHistoryItems } from "./TransactionHistoryItems";
import PropTypes from "prop-types";
export const TransactionHistory = ({ transactions }) => {
  return (
    <section className="transaction">
      <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          <TransactionHistoryItems transactions={transactions} />
        </tbody>
      </table>
    </section>
  );
};
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
