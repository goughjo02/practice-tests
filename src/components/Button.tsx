import React from "react";

type Props = {
  id: string;
  title: string;
  onClick: () => {};
};

const Button = ({ title, onClick }: Props) => {
  return <button onClick={onClick}>{title}</button>;
};

export default Button;
