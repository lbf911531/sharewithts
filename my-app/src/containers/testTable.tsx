
import React, { Component, ReactNode } from 'react';
import { Table, message } from 'antd';
import { IStateContainTable } from 'type/common';
import "../mock";
import axios from 'axios';

interface recordObj {
  name: string,
  age: number,
  gender: string,
  id: string,
}
interface IProps {}
interface IState extends IStateContainTable{
  dataSource: recordObj[],
  count: number,
}

export default class TextTable extends Component<IProps, IState> {
  // 对state加上readonly是为了避免出现 this.state = xxx以及this.state.x = xxx;
  public readonly state: Readonly<IState> = {
    columns: [
      {
        title: 'name',
        dataIndex: 'name',
        key: 0,
        render(text) { return (<span>{text}</span>)}
      },
      {
        title: 'age',
        dataIndex: 'age',
        key: 1,
      },
      {
        title: 'gender',
        dataIndex: 'gender',
        key: 2,
        render(text) { return (<span>{text === 0 ? '女' : '男'}</span>)}
      },
    ],
    dataSource: [],
    count: 1,
  }

  public componentDidMount(): void {
    axios.get('/table/data')
      .then(res => {
        console.log(res);
        this.setState({
          dataSource: res.data.list || [],
        })
      })
      .catch(err => {
        message.error(err);
      })
  }
  
  public render() : ReactNode {
    const { columns, dataSource } = this.state;
    return (
      <div>
        <Table columns={columns} dataSource={dataSource} rowKey='id' />
      </div>
    )
  }
}