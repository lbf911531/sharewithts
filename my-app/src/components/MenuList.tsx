import React from 'react';
import { Menu, Icon, Button } from 'antd';
import { Link } from 'react-router-dom';

interface IState {
  collapsed: boolean;
}
class MenuList extends React.Component<{},IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      collapsed:  false,
    }
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const { collapsed } = this.state;
    return (
      <Menu
        defaultSelectedKeys={['1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        inlineIndent={12}
        style={{height: '100%'}}
      >
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16, float: 'left' }}>
          <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        <Menu.Item key="1">
          <Link to="/" style={{color: '#fff', display: 'block'}}>
            <Icon type="pie-chart" />
            Option 1
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/second" style={{color: '#fff', display: 'block'}}>
            <Icon type="desktop" />
            Option 2
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/third" style={{color: '#fff', display: 'block'}}>
            <Icon type="inbox" />
            Option 3
          </Link>
        </Menu.Item>
      </Menu>
    )
  }
}

export default MenuList