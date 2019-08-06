import React from 'react';
import './style.css';
import OrderList from '../OrderList'
import Header from '../Header'
import 'antd-mobile/dist/antd-mobile.css';
// import Header from './components/Header'
function App() {
  return (
    <div className="App">
      <Header />
      <OrderList />
    </div>
  );
}

export default App;
