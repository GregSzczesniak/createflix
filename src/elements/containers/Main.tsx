import React, {ReactElement} from 'react';

interface IMain {
  children: ReactElement[] | ReactElement;
}

const Main = ({children}: IMain) => {
  return (
    <main className={["max-w-screen-lg", "m-auto", "min-h-screen"].join(" ")}>{children}</main>
  )
};

export default Main;