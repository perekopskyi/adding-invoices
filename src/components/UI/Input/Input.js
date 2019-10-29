import React from 'react';
import './Input.css';

function isInvalid(valid) {
  return !valid
}

const Input = props => {
  const inputType = props.type || 'text'
  const cls = ['Input']
  const htmlFor = `${inputType}-${Math.random()}`

  return (
    <div className={cls.join(' ')}>
      <label htmlFor={htmlFor}>{props.label}</label>

      {
        (inputType === 'TEXTAREA')
          ? <textarea />
          : <input
              type={inputType}
              id={htmlFor}
              value={props.value}
              onChange={props.onChange}
            />
      }

      {
        isInvalid(props)
          ? <span>{props.errorMessage || 'Введите корректное значение'}</span>
          : null
      }
    </div>
  )
}

export default Input