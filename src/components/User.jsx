import React from "react";

class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo:{
                name:"",
                location:"India",
                avatar_url: ""

            }
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/amanDev1437");
        const json = await data.json();

        this.setState({
            userInfo:json
        });
    
    }

    render(){

        const {name, location, avatar_url, contact} = this.state.userInfo;

        return (
            <div className="user-card">
                <img src={avatar_url} alt="user-img"></img>
                <h2>Name:{name}</h2>
                <h4>Location:{location}</h4>
                <h4>Contact:{contact}</h4>
            </div>
        );
    }
}

export default User;