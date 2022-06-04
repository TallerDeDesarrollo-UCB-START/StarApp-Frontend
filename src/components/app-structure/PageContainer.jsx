import React from "react";
import { Container } from "@mui/material";

const PageContainer = ({ children }) => {
  return (
    <Container style={{backgroundColor: "lightgray"}} maxWidth="lg">
      {children}
    </Container>
  );
};

export default PageContainer;
