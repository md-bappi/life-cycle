import React, { Component } from "react";

export default class Player extends Component {
  render() {
    if (this.props.playerName === "messi")
      return (
        <div>
          <h1>{this.props.playerName}</h1>
        </div>
      );
  }
}

// import React from "react";

// const Player = ({ playerName }) => {
//   if (playerName === "sadiomun") {
//     return (
//       <div>
//         <h1>{playerName}</h1>
//         <h1>hello</h1>
//         <h1>{playerName}</h1>
//       </div>
//     );
//   }
// };

// export default Player;
