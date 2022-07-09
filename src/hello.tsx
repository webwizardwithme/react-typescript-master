import * as React from "react";

interface Props {
  userName: string;
}

export const HelloComponent: React.FC<Props> = (props: Props) => {
  return <h2>Hello {props.userName}</h2>;
};
