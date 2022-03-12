import './index.css';
import { Table } from 'antd'
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
    title: '基础工资',
    dataIndex: 'base_salary',
    key: 'base_salary',
  },{
    title: '竞业补贴',
    dataIndex: 'competi_subsidy',
    key: 'competi_subsidy',
  },{
    title: '高管补贴',
    dataIndex: 'senior_subsidy',
    key: 'senior_subsidy',
  },{
    title: '季度奖金基数',
    dataIndex: 'quarter_bonus_base',
    key: 'quarter_bonus_base',
  },{
    title: '年终奖基数',
    dataIndex: 'year_bonus_base',
    key: 'year_bonus_base',
  },{
    title: '创建时间',
    dataIndex: 'create_time',
    key: 'create_time',
  },{
    title: '更新时间',
    dataIndex: 'update_time',
    key: 'update_time',
  }];

  return (
    <div className="Members">
        <Table columns={columns} dataSource={members} rowKey='id'/>
    </div>
  );
}

export default Members;
