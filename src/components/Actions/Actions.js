import React from 'react';
import Button from '../Button/Button';
import './Actions.css';
import { Link } from 'react-router-dom';

const Actions = props => {
  return (
    <div className="Actions">
      <h2>Actions</h2>

      <Link to="/create">
        <Button
          type="primary"
          onClick={handleClick}
        >
          Add new
        </Button>
      </Link>
      
    </div>
  )
}

function handleClick() {
  
} 

export default Actions