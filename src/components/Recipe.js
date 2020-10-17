import React, { Component } from 'react'
import Axios from 'axios'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'


export default class Recipe extends Component {

    constructor(){
        super()
        this.state={
            data:[],
            value:0
        }
    }

    componentDidMount(){
       
        let that = this;
        Axios.get('http://starlord.hackerearth.com/recipe').then(function (response) {
            // handle success
            console.log(response.data);
            that.setState({
                value:1,
                data:response.data
            })
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
    }



    render() {
        return (
            <div className="recipe">


                {
                    this.state.value===1?

                    this.state.data.map(ds=>{
                         
                        return (
                            <Card className="root" >
                            <CardActionArea>
                              <CardMedia 
                                
                                
                                title={ds.name}
                              >
                                 <img className="cmedia" src ={ds.image} alt="avsd"/>
                              </CardMedia>
                             
                              <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                  {ds.name}

                                  Price: {ds.price} $
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                  {ds.description}
                                </Typography>
                              </CardContent>
                            </CardActionArea>
                            <CardActions>
                            <Link to="/payment">
                              <Button variant="contained" color="secondary" >
                                Buy
                              </Button>
                              </Link>
                              
                            </CardActions>
                          </Card>
                        )
                            
                    }) :""

                }
   
  

                
            </div>
        )
    }
}
