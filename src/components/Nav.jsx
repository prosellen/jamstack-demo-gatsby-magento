import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.header`
  margin: 2rem 0 3rem;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(80px, 150px));
    gap: 0.5rem;
    align-items: center;

    li {
      text-align: right;
      &:nth-child(1) {
        text-align: left;
      }
    }
  }
`;

const H1Style = styled.h1`
  margin-top: 0;
  margin-bottom: 64;
  max-width: 320;

  .headingAccentStyles {
    color: "#663399";
  }
`;

const NavStyles = styled.nav`
  .headingStyles {
    margin-top: 0;
    margin-bottom: 64;
    max-width: 320;
  }
  .headingAccentStyles {
    color: "#663399";
  }
`;

function NavLink({ navigationNode }) {
  return (
    <li>
      <Link to={navigationNode.url_path}>{navigationNode.name}</Link>
    </li>
  );
}

export default function Nav() {
  const data = useStaticQuery(graphql`
    query {
      nav: allMagentoCategory(
        filter: { level: { eq: 2 }, include_in_menu: { eq: 1 } }
        sort: {order: [ASC, ASC], fields: [level, position]}
      ) {
        nodes {
          name
          level
          position
          id
          url_path
          magento_id
          parent_category_id
        }
      }
    }
  `);

  return (
    <HeaderStyle>
      <NavStyles>
        <ul>
          {data.nav.nodes.map((navigationNode) => (
            <NavLink key={navigationNode.id} navigationNode={navigationNode} />
          ))}
          {/* <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products/">Products</Link>
          </li>
          <li>
            <Link to="/categories/">Categories</Link>
          </li> */}
        </ul>
      </NavStyles>
    </HeaderStyle>
  );
}
