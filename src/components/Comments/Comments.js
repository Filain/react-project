import {Component} from "react";
import {postComentService} from "../../servises/postComentService";
import {Comment} from "./Comment";

class Comments extends Component{
    constructor(props) {
        super(props);
        this.state={
            comments:[]
        }
    }
componentDidMount() {
        postComentService.getAllComments().then(({data})=>this.setState({comments:data}))
}
render() {
        return(
            <>
                {this.state.comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
            </>
        )
}
}

export {Comments}