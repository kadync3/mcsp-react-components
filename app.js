// TODO
// import React from 'react';
// import  ReactDOM from 'react-dom/client';
class Items extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      done: false,
      mouse: false  
    };
  }
  onListItemMouseOver (){
    this.setState({
      mouse: !this.state.mouse
    })
    console.log('here')
  }
  onListItemMouseOut (){
    this.setState({
      mouse: !this.state.mouse
    })
    console.log('here')
  }
  onListItemClick(){
    this.setState({
      done: !this.state.done
    })
  }
  render(){
  
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.mouse ? 'bold' : 'normal'
    };
  
    return (
      <ul>
        <li style={style} onMouseOut ={this.onListItemMouseOver.bind(this)} 
        onMouseOver={this.onListItemMouseOver.bind(this)}
         onClick={this.onListItemClick.bind(this)}>
          {this.props.groceries}
          </li>
       
      </ul>
    );
  }

  };
var GroceryList = (props)=>(
  
  <ul> My Grocery List
    {props.groceries.map((groceries)=> (
      <Items groceries={groceries}/>
    ))}
    
    
  </ul>
)
var App = ()=>(
  <div>
    <GroceryList  groceries={['milk','eggs']}/>
  </div>
)
ReactDOM.render(<App/>, document.getElementById("app") )