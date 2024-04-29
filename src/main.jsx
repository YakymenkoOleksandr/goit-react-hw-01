import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import Profile from './components/Profile.jsx';
import './components/Profile.css';
import './index.css';
import FriendList from './components/FriendList.jsx';
import './components/FriendList.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile />
    <FriendList />
  </React.StrictMode>
);
