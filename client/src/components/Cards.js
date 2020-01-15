import React from 'react';

const Cards = (props) =>{
    console.log(props.user)
    const{avatar_url,
        id,
        login,
        url,
        followers_url,
        bio} = props.user

        return (
            <div>
            <img src = {avatar_url}/>
            <p>ID:{id}</p>
            <p>Username: {login}</p>
            <p>Github: {url}</p>
            <p>Bio: {bio}</p>
            <p>Followers: {followers_url}</p>
        </div>
        )
}
export default Cards