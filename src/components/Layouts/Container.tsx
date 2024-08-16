import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

function Container(props: ContainerProps) {
  return <div className="wrapper">{props.children}</div>;
}

export default Container;
