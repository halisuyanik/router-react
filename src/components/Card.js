import React from "react";

class Card extends React.Component{
    state={user:'',}
    componentDidMount(){
        let user=this.props.match.params.user;
        this.setState({user})
    }
    render(){
        const {user}=this.state
        return(

            <div>
            <h3 >CARD</h3>
            <h3>{user}</h3>
        </div>
        )
    }
}

export default Card;