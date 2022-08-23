import { ReactNode } from "react";

type IProps = {
  children: ReactNode;
};

const B = ({ children }: IProps) => <b className="font-bold">{children}</b>;

export default B;
