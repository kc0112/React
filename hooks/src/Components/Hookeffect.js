import React, { useState,useEffect }from 'react'

function Hookeffect() {
    const [resourceType, setResourceType] = useState('posts');
    console.log('render')

    // code inside useEffect runs when array arg changes
    useEffect((){
        console.log('you changed resourceType');
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`).then(response=>response.json()).then(json=>console.log(json))
    },/*array arg*/[resourceType])

    /*useEffect((){
        console.log('Mount method by empty arg array');
    },[]) */

    return (
        <>
        <div>
                <button onClick={() => setResourceType('posts')}>Posts</button>
                <button onClick={() => setResourceType('users')}>Users</button>
                <button onClick={()=>setResourceType('comments')}>Comments</button>
            </div>
            <h1>{resourceType}</h1>
        </>
    )
}

export default Hookeffect
