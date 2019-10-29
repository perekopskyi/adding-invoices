import React, {Component} from 'react';
import './CreateInvoice.css';
import Header from '../../components/Header/Header';
import Creater from './Creater/Creater';


export default class CreateInvoice extends Component {
  render() {
    return (
      <div className="CreateInvoice">
        <Header>Create Invoice</Header>
        <Creater/>
      </div>
    )
  }
}