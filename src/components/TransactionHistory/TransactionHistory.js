import { TransactionHistoryItems } from "./TransactionHistoryItems";
import PropTypes from "prop-types";
import { Section } from "../../common/Section.styled";
import { Table, TableTr, TableTh } from "./TransactionHistory.styled";
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
          <TransactionHistoryItems transactions={transactions} />
        </tbody>
      </Table>
    </Section>
  );
};
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
