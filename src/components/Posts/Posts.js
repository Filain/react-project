import React, {Component} from "react";
import {postComentService} from "../../servises/postComentService";
import {Post} from "./Post";

class Posts extends Component{
    constructor(props) {
        super(props);
        this.state={
            posts:[]
        }
    }
    componentDidMount() {
        postComentService.getAllPost().then(({data})=>this.setState({posts:data}))

    }


    render() {

        return(
            <>
                {this.state.posts.map(post=> <Post key={post.id} post={post} />)}
            </>
        )
    }
}

export {Posts}