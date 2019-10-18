import React, {Component} from 'react';
import Layout from './components/hoc/Layout/Layout';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <Layout>
        <Header>Invoices</Header>
      </Layout>
    )
  }
}

export default App;
