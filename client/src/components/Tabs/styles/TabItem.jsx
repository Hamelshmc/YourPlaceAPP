import React from 'react';

const TabItem = (props) => {
  const { children } = props;
  return <div {...props}>{children}</div>;
};

export default TabItem;
