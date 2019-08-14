
import React, { Component } from 'react';
import { Button, Card } from 'antd';
import HelloSon from 'containers/helloSon';

interface IState {
  count: number,
}

export default class Hello extends Component<{}, IState> {
 
  public state = {
    count: 1,
  }

  public handleAdd = (): void => {
    let { count } = this.state;
    count = count + 1;
    this.setState({
      count,
    })
  }

  public handleDel = (): void => {
    let { count } = this.state;
    count = count - 1;
    this.setState({ count });
  }
  
  public render() {
    return (
      <Card title='父组件' type='inner'>
        <div>{`hello${this.state.count}`}</div>
        <Button type='primary' onClick={this.handleAdd}>+</Button>
        <Button onClick={this.handleDel} style={{marginLeft: 20}}>-</Button>
        <HelloSon count={this.state.count} name='tom' />
      </Card>
    )
  }
}