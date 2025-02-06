import React from 'react'

const FBCPropsEX =(props)=> {
        console.log(props);
    if(props.isMarried==true){
        return (
            <div>
                <h1>{props.username} is commited to varshitha</h1>
        {
            props.hobbies.map(hobby=>{
                return <li>{hobby}</li>
            })
        }
        </div>
        )
    }else{
        return<h1>Not married</h1>
    }
}

export default FBCPropsEX