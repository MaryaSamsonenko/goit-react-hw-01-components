import PropTypes from "prop-types";
import { TableTr, TableTd } from "./TransactionHistoryItems.styled";
export const TransactionHistoryItems = ({ transactions }) => {
  return transactions.map(({ id, type, amount, currency }) => (
    <TableTr key={id}>
      <TableTd>{type}</TableTd>
      <TableTd>{amount}</TableTd>
      <TableTd>{currency}</TableTd>
    </TableTr>
  ));
};
TransactionHistoryItems.prototypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
