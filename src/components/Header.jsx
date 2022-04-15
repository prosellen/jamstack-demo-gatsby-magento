import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.header`
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

const ContentStyle = styled.div`
  padding: 30px 20px 0;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
  width: auto;
  position: relative;
`;

const Header = () => {
  return (
    <HeaderStyles>
      <ContentStyle>ddd</ContentStyle>
    </HeaderStyles>
  );
};

export default Header;
