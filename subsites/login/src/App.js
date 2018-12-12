import React, { Component } from 'react';
import { Layout, Col, Row, Input } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
        </Header>
        <Content style={{ padding: '0 50px' }}>
        <Row>
          <Col span={16}>
            <div>
              <h1>We create a</h1>
              <h1>New Generation</h1>
              <h1>of Dream</h1>
            </div>
            <div>
              <p>Lorem asd asd asd</p>
            </div>
          </Col>
          <Col span={8}>
            <div className="loginWrapper">
              <h4>Welcome back</h4>
              <label htmlFor="">Email</label>
              <Input size="large" placeholder="email" />

              <label htmlFor="">Password</label>
              <Input size="large" placeholder="password" />
            </div>
          </Col>
        </Row>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Facebook - Twitter
        </Footer>
      </Layout>
    );
  }
}

export default App;
