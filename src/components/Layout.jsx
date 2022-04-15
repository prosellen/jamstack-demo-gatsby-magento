import "normalize.css";
import React from "react";
import styled from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

const SiteWrapper = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  padding: 1rem 3rem 1rem;
  background-color: #fff;
  margin: 0 auto 4rem auto;

  margin: 0;
  position: relative;
  transition: margin 0.3s ease-out 0s;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <SiteWrapper>
        <Header />
        <Nav />
        {children}
        <Footer />
      </SiteWrapper>
    </>
  );
};

export default Layout;
