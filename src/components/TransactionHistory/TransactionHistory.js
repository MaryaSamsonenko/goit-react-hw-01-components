import PropTypes from "prop-types";
import { Section } from "../../common/Section.styled";
import {
  Table,
  TableTr,
  TableTh,
  TableTrEv,
  TableTd,
} from "./TransactionHistory.styled";
export const TransactionHistory = ({ transactions }) => {
  return (
    <Section>
      <Table>
        <thead>
          <TableTr>
            <TableTh>Type</TableTh>
            <TableTh>Amount</TableTh>
            <TableTh>Currency</TableTh>
          </TableTr>
        </thead>

        <tbody>
          {transactions.map(({ id, type, amount, currency }) => (
            <TableTrEv key={id}>
              <TableTd>{type}</TableTd>
              <TableTd>{amount}</TableTd>
              <TableTd>{currency}</TableTd>
            </TableTrEv>
          ))}
        </tbody>
      </Table>
    </Section>
  );
};
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
