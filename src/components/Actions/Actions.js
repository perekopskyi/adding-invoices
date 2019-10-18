import React from 'react';
import Button from '../Button/Button';
import './Actions.css';

const Actions = props => {
  return (
    <div className="Actions">
      <h2>Actions</h2>
      <Button
        type = "primary"
      >
        Add new
      </Button>
    </div>
  )
}

export default Actions