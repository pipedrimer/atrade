
import useTransactions from "../services/useTransaction";

const BonusHistory = () => {
  const { data, loading, error } = useTransactions("others");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Amount</th>
            <th>Type</th>
            <th>Plan/Narration</th>
            <th>Date created</th>
          </tr>
        </thead>
        <tbody>
          {data.map((transaction) => (
            <tr key={transaction.id}>
              <td>${transaction.amount}</td>
              <td>{transaction.type}</td>
              <td>{transaction.plan_narration}</td>
              <td>{new Date(transaction.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BonusHistory;