// TODO
// import React from 'react';
// import  ReactDOM from 'react-dom/client';
var Items = (props)=>{
  var onListItemClick = (e)=>{
    console.log('I have been clicked')
  }
  return(
<ul onClick={onListItemClick}>
  <li >{props.groceries[0]}</li>
  <li>{props.groceries[1]}</li>
</ul>
  )
  };
var GroceryList = ()=>(
  
  <ul> Grocery List
    <Items groceries={['Milkarue', 'Egga']} />
    
  </ul>
)

ReactDOM.render(<GroceryList/>, document.getElementById("app") )