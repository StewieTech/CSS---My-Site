import React from "react";
import Avatar from "./Avatar"
import Detail from "./Detail"


function Card(props) { 
    return (
        
        <div className="card">
          <div className="top">
          <p>Hello {props.key}</p>
            <h2 className = "name">{props.name}</h2>
            <Avatar img={props.img}/>
          </div>
          <div className="bottom">
          <Detail 
            detailInfo={props.tele}
          />
          <Detail 
            detailInfo={props.email}
          />
            {/* <p className = "info">{props.tele}</p>
            <p className="info">{props.email}</p> */}
          </div>
        </div>
    );
};

    /* <h2 >{props.name}</h2>
      <img src = {props.img} / >
      alt= {props.alt}
      <p >
        {props.tele},
        {props.email}
      </p> */


export default Card;