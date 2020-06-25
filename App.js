import * as React from 'react';
import { Home } from './app/views/Home.js';
import { Contact } from './app/views/Contact.js';
import { StackNavigator} from 'react-navigation';

import { Video } from './app/views/Video.js';
import { VideoDetails } from './app/views/VideoDetails.js';
import { Register } from './app/views/Register.js';
import { Login } from './app/views/Login.js';

import { Quiz } from './app/views/Quiz.js';
import { Finish } from './app/views/QuizFinish.js';

const MyRoutes = StackNavigator({
  HomeRT:{
    screen: Home
  },
  ContactRT:{
    screen: Contact
  },
  LessonRT: {
    screen: Video
  },
  LessonDetailsRT: {
    screen: VideoDetails
  },
  RegisterRT: {
    screen: Register
  },
  LoginRT: {
    screen: Login
  },
  QuizRT: {
    screen: Quiz
  },
  FinishRT: {
    screen: Finish
  },
  
},
{
  initialRouteName: 'HomeRT'
}
);

export default function App() {
  return (
    <MyRoutes />
  );
}
