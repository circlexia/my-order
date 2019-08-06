import React, { Component } from 'react';
import {NavBar} from 'antd-mobile'
class index extends Component {
  render() {
    return (
      <header>
        <NavBar
          mode="dark"
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
          ]}
        >我的订单</NavBar>
      </header>
    );
  }
}

export default index;
