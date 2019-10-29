import React from 'react';
import Button from '../../../components/Button/Button';
import './Creater.css';
import Input from '../../../components/UI/Input/Input';
import { Link } from 'react-router-dom';


const Creater = props => {

  return (
    <div className="Creater">
      <form>
        <fieldset>
          <div class="wrapper">
            <div className="field">
              <Input
                label="Number:"
                value="INV-0002"
              />
            </div>
            <div className="field">
              <Input
                label="Invoice Date:"
                type = "date"
              />
            </div>
          </div>
          <div class="wrapper">
            <div className="field field-3">
              <Input
                label = "Supply Date:"
                type = "date"
              />
            </div>
          </div>

          <div className="field">
             <Input
                label = "Comment:"
                type = "textarea"
              />
          </div>
        </fieldset>

        <Link to="/">
          <Button
            type="primary"
          >
            Save
          </Button>    
        </Link>
      </form>
    </div>
  )
}

export default Creater