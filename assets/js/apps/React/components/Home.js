import React from 'react';

export class Home extends React.Component
{
  constructor(props)
  {
    super(props);
    this.defaultGreeting = 'Hi From React!';
    this.state = {
      greeting : this.defaultGreeting,
      toggleGreeting : false
    }
    this.updateGreeting = this.updateGreeting.bind(this);
  }
  updateGreeting(event)
  {
    event.preventDefault();
    this.setState(prevState => {
      //console.log(prevState);
      return {
        greeting: prevState.toggleGreeting?this.defaultGreeting:'new greeting!',
        toggleGreeting: prevState.toggleGreeting?false:true
      }
    });
  }
  render()
  {
    return <div>
      <h1>{this.state.greeting}</h1>
      <button onClick={this.updateGreeting} >Update Greeting!</button>
    </div>;
  }
}
