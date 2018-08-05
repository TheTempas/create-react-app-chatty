import React, {Component} from 'react';

import IncomingInfo from '../containers/IncomingInfo';

class IncomingInfoList extends Component {
  render() {

    return (
      <main className="messages">
        {this.props.messages.map((message, index) => {
          return (
            <IncomingInfo key={message.id} username={message.username} content={message.content} type={message.type} previoususer={message.previoususer} name={message.name} color={message.color} />
            )
          }
        )
      }
      </main>
    )
  }
}

// <Message /> takes values out of messages, iteraties and passes to Message.jsx

export default IncomingInfoList;
