import './index.css';
import { Table, Menu } from 'antd'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, Switch } from "react-router-dom";
import Members from '../members'

function Home(props) {
  console.log('home:', props, props.children)
  return (
    <div className="Home">
      <Menu 
        mode='horizontal'
        defaultSelectedKeys={['members']}
        size='sm'
      >
        <Menu.Item key='members'>员工列表</Menu.Item>
      </Menu>

      <Switch>
        <Route path='/members' component={Members}></Route>
      </Switch>
    </div>
  );
}

export default Home;
