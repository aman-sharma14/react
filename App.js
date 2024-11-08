import React from 'react'
import Nav from './nav'
import Card from './card'
import data from "./data";

export default function App(){

    const cards = data.map(card =>{
        return <Card {...card}/>
    })


    return (
        <div className='main'>
            <Nav/>
            {cards}
        </div>
    )
}