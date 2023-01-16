import React from 'react';
import Beast from './Beast';


class Main extends React.Component{
  render(){
    return (
    <>
      <h3>Hello Class</h3>
      <Beast name="Jordan" />
      <Beast name="Ken" />
      <Beast name="Yaz" />
      <Beast />
      <Beast />
      <Beast />
    </>

    )
  }
}

export default Main;
