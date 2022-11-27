import logo from './logo.svg';
import './App.css';
import React from 'react'
import {Button}  from 'semantic-ui-react'
import './App.css';
import { faker } from '@faker-js/faker';
import Card from './Card'

class CardContainer extends React.Component {
  constructor(props){
    super(props);
    console.log(props)
    this.cardData = props;
    this.numOfProps = Object.keys(props).length;
    };
    

  
  render(){
    let arrayOfCotent = [];
    for (let index = 0; index < this.numOfProps; index++) {
      let obj = <Card key={index.toString()} {...this.cardData[index]}  />
      arrayOfCotent.push(obj);
      
     }
    console.log(this.cardData);
    return(
      <div className='ui link cards'>
        {arrayOfCotent}
      </div>
    )
  }
  

}

export default CardContainer;
