import {Component} from "react";
import {Car} from "./Car";
import axios from "axios";


class Cars extends Component{
    constructor(props) {
        super(props);
        this.state={
            cars:[]
        }
    }
componentDidMount() {
axios.create({baseURL:'http://owu.linkpc.net/carsAPI/v1'}).get('/cars').then(({data})=>this.setState({cars:data}))
}


render() {

 return(
     <>
         {this.state.cars.map(car=><Car key={car.id} car={car}/>)}
     </>
 )
}

}
export {Cars}