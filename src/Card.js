import logo from './logo.svg';
import './App.css';
import React from 'react'
import {Button}  from 'semantic-ui-react'
import './App.css';
import { faker } from '@faker-js/faker';

class Card extends React.Component {
  constructor(props){
    super(props);
    console.log(`PROPS ${props}`)
    console.log(props);
    this.displayName = props.name;
    this.title = props.jobTitle;
    this.description = props.description;
    this.extra = props.extra;
    this.friends = props.friends;
    this.imgUrl = props.avatarUrl;
    this.friends = props.numberOfFriends;
  
    }
  render(){
    
    return (
      <div>
      <div className="card">
    <div className="image">
      <img style={{width: "100%"}} src={this.imgUrl} />
    </div>
    <div className="content">
      <div className="header">{this.displayName}</div>
      <div className="meta">
        <a>{this.title}</a>
      </div>
      <div className="description">
        {this.description}
      </div>
    </div>
    <div className="extra content">
      <span className="right floated">
        {this.extra}
      </span>
      <span>
        <i className="user icon"></i>
        {this.friends} Friends
      </span>
    </div>
  </div>
  </div>
    )
  }


  componentDidMount(){
    
  }
}


export default Card;
