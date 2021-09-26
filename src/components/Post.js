import React, { useEffect, useState } from 'react'
import mypost from '../data/posts'

function Post() {
    const [mydata, setMyData] = useState([]);
    useEffect(() =>{
        localStorage.setItem("mypost", JSON.stringify(mypost));
        var data = JSON.parse(localStorage.getItem("mypost"));
        setMyData(data);
    },[])
    return (
        <>
            {
               mydata.map(item=>{
                   return(
                       <div className="card home-card" key={item._id}>
                            <div className="card-image">
                                <img src={item.thumbnail_image}/>
                            </div>
                            <h3>{item.event_name}</h3>
                            <span><span>{`Event Date: `}</span>{item.event_date.toLocaleString()}</span>
                            <div className="card-content">
                            <div>
                            <i className="material-icons" style={{color:"red"}}>favorite</i>  
                            <h6>{item.likes} likes</h6> 
                            </div> 
                            <div>
                            <i className="material-icons" style={{color:"blue"}}>visibility</i>  
                            <h6>{item.views} views</h6>
                            </div>
                            <div>
                            <i className="material-icons" style={{color:"blue"}}>screen_share</i>
                            <h6>{item.shares} shares</h6>
                            </div>
                                
                            </div>
                        </div> 
                   )
               })
           }
        </>
    )
}

export default Post ;



