import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'

export default class Payment extends Component {
    render() {
        return (
            <div>
                <form>
                    <label htmlFor="card">
                        Card Number:</label>
                        <input name ="card" type="text"  required={true}/>
                    
                    <label htmlFor="fname">
                        Name: </label>
                        <input type="text" name="fname" required={true}/>
                   
                    <label htmlFor="cvv">
                        CVV: </label>
                        <input type="text" name="cvv" required={true}/>
                   
                 <Link to="payment/otp">
                 <Button variant="contained" color="primary"  >
                         Pay
                    </Button>
                 </Link>
                 
                
                </form>
            </div>
        )
    }
}

