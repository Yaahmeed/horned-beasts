import React from 'react'



class Beast extends React.Component {
  render(){
    return(
      <>
      <article>
        <p>{this.props.name}</p>
      </article>
      </>
    )
  }
}

export default Beast;