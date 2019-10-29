import React, {Component} from 'react';
import './MainView.css';
import Header from '../../components/Header/Header';
import Actions from '../../components/Actions/Actions';
import Invoices from './Invoices/Invoices';

export default class MainView extends Component {
  render() {
    return (
      <div className="MainView">
        <Header>Invoices</Header>
        <Actions />
        <Invoices/>
      </div>
    )
  }
}