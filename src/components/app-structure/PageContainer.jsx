import React from "react";
import { Container } from "@material-ui/core";

const PageContainer = ({ children }) => {
  const styles = {
    paddingTop: 10,
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 50
  }
  return (
    <Container style={styles} maxWidth="lg">
      {children}
    </Container>
  );
};

export default PageContainer;
