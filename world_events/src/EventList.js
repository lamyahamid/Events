import React, { Component } from 'react';

import EventRow from './EventsRow'
import './EventList.css'

class EventList extends Component{

    
   
render(){
console.log(this.props.event);

const events= this.props.event.map((element,index)=>{
    return <li>{element.name.text}</li> 
    // console.log(element);
    

})

    return(
        <div>
            <ul>{events}</ul>
        </div>
    )
}



}
export default EventList;