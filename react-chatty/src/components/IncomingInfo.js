import React from 'react';

const IncomingInfo = (props) => {
  switch (props.type) {
    case 'postMessage':
      return <Message {...props} />;
    case 'postImage':
      return <Image {...props} />;
    case 'postNotification':
    default:
      return <Notification {...props} />;
  }
};

const Message = (props) => {
  return (
    <ContentWrapper {...props} >
        {props.content}
    </ContentWrapper>
  );
};

const Image = (props) => {
  return (
    <ContentWrapper {...props} >
      <img src={props.content} alt="Content"/> 
    </ContentWrapper>
  );
};

const ContentWrapper = (props) => {
  return (
    <div className="message">
      <span className="message-username" style={{color: props.color}}>
        {props.username}
      </span>
      <span className="message-content">
        {props.children}
      </span>
    </div>
  );
};

const Notification = (props) => {
  console.log(props);
  return (
    <div className="message system">
      {props.previoususer} changed their name to {props.name}
    </div>
  );
};

export default IncomingInfo;
