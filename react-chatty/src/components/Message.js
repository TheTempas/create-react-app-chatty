import React, {Component} from 'react';

class Message extends Component {
  render () {

    if (this.props.type === "postMessage") {
      const regexep = /(jpg|png|gif)/
      const content = this.props.content.match(regexep) ? <img src={this.props.content} alt="Image"/> : this.props.content ;
        return (
          <div className="message">
            <span className="message-username" style={{color: this.props.color}}>{this.props.username}</span>
            <span className="message-content">
            {content}
            </span>
          </div>
        )
    }

    else if (this.props.type === "postNotification") {
      return (
        <div className="message system">
          {this.props.previoususer} changed their name to {this.props.name}
        </div>
      )
    }
  }
}

export default Message;