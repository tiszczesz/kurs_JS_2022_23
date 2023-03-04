import React, { Component } from 'react'

type Props = {
    firstname:string;
    lastname:string;
}



class ClassComp extends Component<Props> {
  firstname:string=this.props.firstname;
  lastname:string=this.props.lastname;
  
  render() {
    return (
      <div>Dane osobowe: {this.firstname} {this.lastname}</div>
    )
  }
}

export default ClassComp