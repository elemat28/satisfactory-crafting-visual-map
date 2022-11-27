import logo from './logo.svg';
import './App.css';
import React from 'react'
import {Button}  from 'semantic-ui-react'
import './App.css';
import { faker } from '@faker-js/faker';
import CardContainer from './CardContainer'

function App() {
  let fakeData = [{
    name: faker.name.fullName(),
    jobTitle: faker.name.jobTitle(),
    jobArea: faker.name.jobArea(),
    description: faker.name.jobDescriptor(),
    avatarUrl: faker.internet.avatar(),
    numberOfFriends: faker.random.numeric(2)
  },
  {
    name: faker.name.fullName(),
    jobTitle: faker.name.jobTitle(),
    jobArea: faker.name.jobArea(),
    description: faker.name.jobDescriptor(),
    avatarUrl: faker.internet.avatar(),
    numberOfFriends: faker.random.numeric(2)
  },
  {
    name: faker.name.fullName(),
    jobTitle: faker.name.jobTitle(),
    jobArea: faker.name.jobArea(),
    description: faker.name.jobDescriptor(),
    avatarUrl: faker.internet.avatar(),
    numberOfFriends: faker.random.numeric(2)
    
  }];
  return (
    <div className='App'>
       <CardContainer {...fakeData} />
      <h1>Hello!</h1>
    </div>
  );
}

export default App;
