import React from 'react'

const WeatherDisplay = ({data}) => {
    const tempColor = {
        color: data.temperature > 20 ? 'red' : 'blue'
    }

    return (
        <div>
            <p>Temperature: <span style={tempColor}>{data.temperature}</span></p>
            <p>Conditions: {data.conditions}</p>
        </div>
    )
}

export default WeatherDisplay