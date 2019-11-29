import React, { Component } from 'react';

export default function LoggerHoc(InputComponent){

  class LoggerHocComponent extends Component
  {
    componentDidMount(){
      console.log("component has mounted")
    }
    render(){
      return (
       <div style={{backgroundColor:"orange", padding:10}}>
        <InputComponent {...this.props} />
       </div>
      )
    }
  } 

  return LoggerHocComponent;
}