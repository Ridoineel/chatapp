import Navbar from "./components/navbar.js";
import React from "react";

function MessageBox(props) {

  let messages = props.messages.map(({user, msg}, index) => {
    return (
      <p className="my-3" key={index}>
        <strong className="msg__user">{user}</strong>
        {message}
      </p>
    )
  });

  return (
    <div className="border p-3" id="chat_panel">
      {messages}
    </div>
  )

}

class Chat extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        messages: [],
      }
    }

    // let form = document.querySelector("#chat--form");
    // let chat_input = document.querySelector("#chat--input");

    addMessage(user, msg) {
        let msgs = this.state.messages.slice();
        msgs.push({user: user, message: msg});

        this.setState({messages: msgs})

    }

    sendMessage() {
        let socket = socket.io.connect("http://localhost:8080");
        let pseudo = prompt("Votre pseudo svp: ");

        while (!pseudo) {
            let pseudo = prompt("Votre pseudo svp: ");
        }
        document.title = pseudo + " | " + document.title;

        socket.emit("new_user", pseudo);

        socket.on("new_user", (pseudo) => {
            // For new user
        })

        socket.on('message', (sender) => {
            this.addMessage(sender.pseudo, sender.message, "btn btn-warning");
        })

        // When one user disconnect
        // user disconnect event
        socket.on("user_disconnect", (pseudo) => {

        })
    }

    render () {
      return (
          <React.Fragment>
            <Navbar />

            <div className="container border full-screen" style={{height: '100vh'}}>
                <h1>ChatApp</h1>

                <form id="chat--form">
                    <div className="form-group col-6 container">
                        <input type="text" id="chat--input" className="my-3 form-control" placeholder="Votre message ..." />
                        <input type="submit" onClick={() => this.sendMessage()} className="btn btn-secondary container my-3"  id="pk" />
                    </div>
                </form>

                <MessageBox messages={this.state.messages}/>

                <br />
            </div>
          </React.Fragment>
      );
    }
}

export default Chat;
