import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from './components/hoc/Layout/Layout';
import MainView from './containers/MainView/MainView';
import CreateInvoice from './containers/CreateInvoice/CreateInvoice';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={MainView} />
          <Route path="/create" component={CreateInvoice} />
        </Switch>
      </Layout>
    )
  }
}

export default App;