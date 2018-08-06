import React from 'react';
import IncomingInfo from '../components/IncomingInfo';

const getNewType = (type, content) => {
  const regexp = /(jpg|png|gif)/

  if (content && content.match(regexp)) {
    return 'postImage';
  }
  return type;
};

export default ({ type, ...rest }) => {
  const new_type = getNewType(type, rest.content);
  return <IncomingInfo type={new_type} {...rest} />;
}
