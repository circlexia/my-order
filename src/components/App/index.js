import React from 'react';
import './style.css';
import OrderList from '../OrderList'
import Header from '../Header'
import 'antd-mobile/dist/antd-mobile.css';
import LikeBtn from '../LikeBtn'
// import Header from './components/Header'
function App() {
  return (
    <div className="App">
      <Header />
      <OrderList />
      <LikeBtn />
    </div>
  );
}

export default App;
