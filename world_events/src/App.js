import React, { Component } from 'react';
import EventList from './EventList'
// import EventDetails from './EventDetails'
import './App.css';
import axios from 'axios'




class App extends Component {

  state = {
    events: {},
    loading: true,
    current:{},
    value:''
  }
  
  changeHandler = (e) => {
    this.setState({ value : e.target.value})
  }
submitHandler= () =>{

  if(this.state.value !== '') {
        axios(`https://www.eventbriteapi.com/v3/events/search/?token=CVD5XRWWRO3RNU6HMRWN&location.address=${this.state.value}`)
          .then(response => {
            console.log(response);
            
            this.setState({events:{ events: response.data.events}, loading: false})
          })
}
}

// componentDidMount(){

//         axios(`https://www.eventbriteapi.com/v3/events/search/?token=CVD5XRWWRO3RNU6HMRWN&location.address=${this.state.value}`)
//           .then(response => {
//             console.log(response);
            
//             this.setState({events: response.data.events, loading: false})
//           })
// }
 
  

  render() {
    // if(this.state.loading) {
    //   return 'loading ...'
    // }

let display;
    //here if 
    if(this.state.events.events){
      display= <EventList event={this.state.events.events}/>;
    } else {
      display =<h1>Choose a City </h1>; 
    }

    console.log(this.state);
    
    return (
      <div className="AppName">
      
      <div className="App">
      <div className="list">
        <select name={'select'} onChange={this.changeHandler}>
          <option>Select City</option>
          <option value={'london'}>london</option>
          <option value={'paris'}>paris</option>
          <option value={'riyadh'}>riyadh</option>
          <option value={'munich'}>munich</option>

        </select>
        <button onClick={this.submitHandler}>submit</button>
      </div>
{display}
      </div>
      </div>
    );
  }
}

export default App;


