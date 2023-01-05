import PropTypes from "prop-types";
import css from "./TransactionHistory.module.css";

export const TransactionHistory = ({ items }) => (
    <table className={css.transactionHistory}>
        <thead >
            <tr className={css.tr}>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map(elem => (
                <tr key={elem.id}>
                    <td>{elem.type}</td>
                    <td className={css.td}>{elem.amount}</td>
                    <td className={css.td}>{elem.currency}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

TransactionHistory.protoType = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired
};
