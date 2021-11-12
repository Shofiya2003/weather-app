import React,{useEffect} from 'react'

export default function SideMain(props) {
    useEffect(()=>{
        console.log(props.weatherArr)
    })
    return (
        <div className="boxColor sideBox">
            <div>
                <div className="searchButton flexCenter"><p className="text buttonText">Search for Places</p></div>
                <div className="locationButton"></div>
            </div>
            <img src={props.weatherArr} alt="weatherimage"></img>
            <h1>{props.temp}</h1>
            <p>{props.tempText}</p>
            <div></div>
            <div></div>
        </div>
    )
}
