import React from 'react';
import axios from 'axios';

import Cards from './Cards';

class Followers extends React.Component {
    state = {followers:[]}
    componentDidMount(){
        axios.get('https://api.github.com/users/edwin-chajon/followers')
        .then(res =>{
            console.log(res)
            this.setState({followers:res.data})
        })
    }
    render(){
        const {followers} = this.state;
        return(
            followers.map(
                follower => {
                    return(
                        <Cards user = {follower}/>
                    )
                }
            )
        )
    }
}
export default Followers