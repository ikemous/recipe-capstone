import React form "react";

interface Props {};

const PageContainer:React.FC<Props> = ({ children }) => {
  return (
    <>
      {children}
    </>
  );
};

export default PageContainer;
