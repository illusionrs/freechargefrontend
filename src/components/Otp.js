import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

export default class Otp extends Component {

    constructor(){
        super()
        this.state={
            value:0,
            ds:"",
            valuetwo:0
        }
    }

    inputHandler=(e)=>{

        this.setState({
            ds:e.target.value
        })


    }
    takeHandler=()=>{

        if(this.state.ds==="1234")
        {
            this.setState({
                valutwo:1,
                data:"successful"
            })
        }
        else{
            this.setState({
                valuetwo:1,
                data:"failed"
            })
        }
    }
    render() {
        return (
            <div>
                <form>
                    <label htmlFor="otp">
                        OTP:
                    </label>
                    <input name="otp" type="text" pattern="[0-9]*"   onChange={this.inputHandler} required />

                    <Button variant="contained" color="secondary" onClick={this.takeHandler}>
                        submit
                    </Button>

                    {
                        this.state.valuetwo===1? <div>
                            {this.state.data}
                        </div>:""
                    }
                    
                </form>

            </div>
        )
    }
}
