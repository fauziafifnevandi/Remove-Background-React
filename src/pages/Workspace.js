import React from "react";
import { useMediaQuery } from "react-responsive";

import BoardWorkspace from "../Layouts/Desktop/Workspace/BoardWorkspace";
import BoardWorkspaceMobile from "../Layouts/Mobile/Workspace/BoardWorkspaceMobile";

function Workspace() {
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    return isTablet ? children : null;
  };
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };

  return (
    <>
      <Desktop>
        <BoardWorkspace></BoardWorkspace>
      </Desktop>
      <Tablet>Cooming soon!</Tablet>
      <Mobile>
        <BoardWorkspaceMobile></BoardWorkspaceMobile>
      </Mobile>
    </>
  );
}

export default Workspace;
