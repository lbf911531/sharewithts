import * as React from 'react';
import './App.css';
import { Row, Col } from 'antd';
import MenuList from './components/MenuList';
import MenuContent from './components/MenuContent';


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Row>
          <Col span={4} style={{height: '100vh'}}>
            <MenuList />
          </Col>
          <Col span={20} style={{height: '100vh'}}>
            <MenuContent />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
