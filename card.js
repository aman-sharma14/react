import React from "react";


export default function Card(props){
    return (
        <>
            <div className="card">
            <img src={props.imageUrl}></img>
            <div className="info">
                <span className="first"><i className="fa-solid fa-location-dot"></i> <span className="loc">{props.location}&nbsp;&nbsp;</span> <a href={props.googleMapsUrl}>View on Google Maps</a></span>
                <h1>{props.title}</h1>

                <b>{props.startDate} - {props.endDate}</b>
                <p>
                    {props.description}
                </p>
            </div>

            
        </div>

        <hr></hr>
        </>
    )
}