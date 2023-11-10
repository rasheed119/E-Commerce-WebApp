import React, { useState, useContext, createContext } from "react";

export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  //sidebar State
  const [Open, SetOpen] = useState(false);

  const handleClose = () => {
    SetOpen(false);
  };

  return (
    <SidebarContext.Provider value={{ Open, SetOpen, handleClose }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
