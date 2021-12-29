import { TransactionHistoryItems } from "./TransactionHistoryItems";
import PropTypes from "prop-types";
import { Section } from "../../common/Section.styled";
export const TransactionHistory = ({ transactions }) => {
  return (
    <Section>
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
    </Section>
  );
};
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
