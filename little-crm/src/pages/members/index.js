import './index.css';
import { Table, Menu } from 'antd'
import axios from 'axios';
import { useEffect, useState } from 'react';

const host = 'http://127.0.0.1:7001/api'

function Members() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get(`${host}/members`)
    .then(function (response) {
      // handle success
      console.log('response:', response);
      setMembers(response.data.members)
    })
    .catch(function (error) {
      // handle error
      console.log('error:', error);
    })
    .then(function () {
      // always executed
    });
  }, [])

  const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },{
    title: '工资',
    dataIndex: 'salary',
    key: 'salary',
  }];

  return (
    <div className="Members">
      <Menu 
            mode='horizontal'
            defaultSelectedKeys={['members']}
            size='sm'
        >
            <Menu.Item key='members'>员工列表</Menu.Item>
        </Menu>
        
        <Table columns={columns} dataSource={members} rowKey='id'/>
    </div>
  );
}

export default Members;
