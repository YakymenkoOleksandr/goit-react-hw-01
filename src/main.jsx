import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import './index.css';
import Profile from './components/Profile/Profile.jsx';
import FriendList from './components/FriendList/FriendList.jsx';
import TransactionHistory from './components/TransactionHistory/TransactionHistory.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile />
    <FriendList />
    <TransactionHistory />
  </React.StrictMode>
);
