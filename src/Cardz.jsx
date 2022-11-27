import React from 'react'


class Card extends React.Component {
  constructor(props){
    super(props);
    console.log("new Card");
    console.log("construcotr");
    console.log(props);
    let keyVar = null;
    if (props.key != null){
      keyVar = props.key;
      console.log(props.key);
    }
    this.state = {
      key: keyVar,
      id: -1,
      displayName : "Username",
      title : "",
      description : " ",
      friends : 0,
      extra : " ",
      imgUrl : " "

    }
    
    
  }
  setBasicDetails(name, title, description){
    //this.setState({displayName: name, title: title, description:description})
    
  }
  setAvatar(imgSrc){
    //this.setState({img : imgSrc});
  }
  setFriends(numberOfFriends){
    //this.setState({friends: numberOfFriends});
    //this.state.friends = numberOfFriends;
  }
  setExtraInfo(text){
    //this.setState({extra: text});
  }
  render(){
    console.log(`hello, key: ${this.state.key}`)
    return (
      <div className="card" key={this.state.key}>
    <div className="image">
      <img style={{width: "100%"}} src={this.state.imgUrl} />
    </div>
    <div className="content">
      <div className="header">{this.state.displayName}</div>
      <div className="meta">
        <a>{this.state.title}</a>
      </div>
      <div className="description">
        {this.state.description}
      </div>
    </div>
    <div className="extra content">
      <span className="right floated">
        {this.state.extra}
      </span>
      <span>
        <i className="user icon"></i>
        {this.state.friends} Friends
      </span>
    </div>
  </div>
    )
  }
  
  
}

export default Card