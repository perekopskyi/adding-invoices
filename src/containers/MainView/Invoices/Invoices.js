import React, {Component} from 'react';
import './Invoices.css';

const invoicesRenderHendler = async () => {
  const tbody = document.querySelector('tbody');

  await fetch('http://localhost:3004/invoices')
    .then(res => res.json())
    .then(res => {
      res.forEach((item) => {

        tbody.innerHTML += `
      <tr>
        <td>${item.date_created}</td>
        <td class="number">INV-${item.number}</td>
        <td>${item.date_supplied}</td>
        <td>${item.comment}</td>
      </tr>
      `
      })
    })
}

class Invoices extends Component {

  componentDidMount() {
    invoicesRenderHendler()
  }
  
  render() {
    return (
      <div className="Invoices">
        <h2>Invioces</h2>

        <table>
          <thead>
            <tr>
              <td>Create</td>
              <td>No</td>
              <td>Supply</td>
              <td>Comment</td>
            </tr>
          </thead>
          <tbody>
            {/* тут выводятся счета */}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Invoices