import styles from './TransactionHistory.module.css';
export default function TransactionHistory(props) {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.headerOfTable}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {props.items.map((transaction, index) => (
          <tr className={`${styles.row} ${index % 2 === 0 ? styles.even : styles.odd}`} key={transaction.id}>
            <td className={`${styles.cell} ${styles.left}`}>{transaction.type}</td>
            <td className={`${styles.cell} ${styles.center}`}>{transaction.amount}</td>
            <td className={styles.cell}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
