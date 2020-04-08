import React from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';

const HomePage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Home Page</h1>
      {/* <Link to="/about">About Page</Link> */}
      <button onClick={() => props.history.push('/posts')}>Posts Page</button>
    </div>
  )
}

const Posts = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Post List Page</h1>
      <Link to={`${props.match.url}/10`}>To POST 10</Link>
      <Link to={`${props.match.url}/13`}>To POST 13</Link>
      <Link to={`${props.match.url}/18`}>To POST 18</Link>
    </div>
  )
}

const PostDetail = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Post Detail Page: {props.match.params.postId}</h1>
    </div>
  )
}

function App() {
  // http://localhost:3000/about
  // http://localhost:3000/about/contact
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/posts/link1/link2/link3' component={Posts} />
      <Route path='/posts/link1/link2/link3/:postId' component={PostDetail} />
    </div>
  );
}

export default App;
