import Navbar from "./components/navbar.js";
import React from "react";
import io from "socket.io-client"

const socket = io.connect("http://localhost:8080");

console.log(socket);

function MessageBox(props) {
  let cur_userPseudo = props.userPseudo;

  let messages = props.messages.map(({pseudo: pseudo, message: msg}, index) => {
    let style = (cur_userPseudo === pseudo) ? "btn btn-success" : "btn btn-secondary";

    return (
      <p className="my-3" key={index}>
          <span className={style}>{pseudo}</span> {msg}
      </p>
    )
  });

  return (
    <div className="border p-3" style={{minHeight: "70vh"}}>
      {messages}
    </div>
  )

}

class Chat extends React.Component {
    constructor(props) {
      super(props);
      this.pseudo = ""

      this.state = {
        messages: [],
        message: ""
      }

      while (!this.pseudo) {
        this.pseudo = prompt("Votre pseudo");
      }

      document.title = `${this.pseudo} | ChatApp`;

      socket.emit("new_user", this.pseudo);

      // When one user disconnect
      // user disconnect event

      // this.socket.on("user_disconnect", (this.pseudo) => {
      //
      // })
      //
      // this.socket.on("new_user", (this.pseudo) => {
      //     // For new user
      // })

      socket.on('message', (sender) => {
          this.addMessage(sender.pseudo, sender.message); // "btn btn-warning"
      })

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
      this.setState({message: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();

        let pseudo = this.pseudo;
        let msg = e.target.message.value;

        if (msg) {
          this.addMessage(pseudo, msg);
          socket.emit("message", msg);
        }
    }

    addMessage(pseudo, msg) {
        let msg_list = this.state.messages.slice();
        msg_list.push({pseudo: pseudo, message: msg});

        this.setState({messages: msg_list});

        window.scrollTo(0, document.body.scrollHeight)
    }

    render () {
      return (
          <React.Fragment>
            <Navbar />
            <div className="container my-3 pb-3">
                <MessageBox messages={this.state.messages} userPseudo={this.pseudo}/>

                <form id="chat--form" onSubmit={this.handleSubmit}>
                    <div className="form-group col-6 container">
                        <input type="text" name="message" value={this.state.message} onChange={this.handleChange} className="my-3 form-control" placeholder="Votre message ..." />
                        <input type="submit" value="Send" className="btn-pers container my-3"  id="pk" />
                    </div>
                </form>

            </div>
          </React.Fragment>
      );
    }
}

export default Chat;
