import React from 'react';

type ShadowButtonProps = {
  children?: React.ReactNode;
};

const ShadowButton: React.FC<ShadowButtonProps> = (props) => {
  const { children } = props;

  return <button className="shadow-button">{children}</button>;
};

export default ShadowButton;
