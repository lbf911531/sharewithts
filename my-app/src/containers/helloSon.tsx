
import React, { Component } from 'react';
import { Card } from 'antd';

interface IState {
  count: number,
}
interface IProps {
  count: number,
  name: string,
}

export default class Hello extends Component<IProps, IState> {

  public state = {
    count: 1,
  }
  // state的初始化不一定要放在constructor里面，但是一定要给state指定类型
  constructor(props: IProps) {
    super(props);
  }
  
  public render() {
    const { count, name } = this.props;
    return (
      <Card title='子组件' type='inner'>
        <div>{`${name}获得${count}分`}</div>
      </Card>
    )
  }
}