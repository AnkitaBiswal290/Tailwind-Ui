// import React from 'react'

// function Profile(prop) {
//   return (
//     <div>
//       <h1>My name is {prop.text.name}</h1>
//       <h2>My age is {prop.data.age}</h2>
//     </div>
//   )
// }

// export default Profile
import React, { Component } from 'react'

export default class Profile extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.data}</h1>
        <h2>{this.props.text.name}</h2>
      </div>
    )
  }
}

