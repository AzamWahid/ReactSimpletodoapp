import React from 'react';
import './App.css';
// import Input from './input';
// import Button from './button';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: ""
    };

this.add = this.add.bind(this);
this.change = this.change.bind(this);

  }
  
  add =(e) =>{
   let{value} = this.state
  // console.log(name)
  }

change = (e) => {
this.setState({
  value:e.target.value
})

}

  
  render() {
    return (
      <div className="App">
         {/* <Input />   
         <Button />   */}

         <input onChange={this.change} />
         <button onClick={this.add}>Add</button>
         <div>
          <li>
            <ul>
              {this.state.value}
              </ul>

              </li>
         </div>
      </div>
    )
  }

}

export default App;
