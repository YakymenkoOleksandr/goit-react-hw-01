import Profile from '../Profile/Profile.jsx';
import FriendList from '../FriendList/FriendList.jsx';
import TransactionHistory from '../TransactionHistory/TransactionHistory.jsx';
import userData from '../Profile/userData.json'
import friends from '../FriendList/FriendList.json';
import  transactions from '../TransactionHistory/transactions.json';

export default function App() {
  return (
    <>
      <Profile
        {...userData}
      />
      <FriendList
        friends={friends}
      />
      <TransactionHistory
        items={transactions}
      />
    </>
  );
}
