import React from "react";
import { Container } from "@mui/material";

const PageContainer = ({ children }) => {
  return (
    <Container style={{backgroundColor: "#F3F2F2"}} maxWidth="lg">
      {children}
    </Container>
  );
};

export default PageContainer;
