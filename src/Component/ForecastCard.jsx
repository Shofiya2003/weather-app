import React from 'react'

export default function ForecastCard(props) {
    return (
        <div>
            <p>{props.date}</p>
            <img src={props.url} alt="weatherimage"></img>
            <div>
                <p></p>
            </div>
        </div>
    )
}
