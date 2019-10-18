import React, {Component} from 'react';
import Layout from './components/hoc/Layout/Layout';
import Header from './components/Header/Header';
import Actions from './components/Actions/Actions';

class App extends Component {
  render() {
    return (
      <Layout>
        <Header>Invoices</Header>
        <Actions/>
      </Layout>
    )
  }
}

export default App;
