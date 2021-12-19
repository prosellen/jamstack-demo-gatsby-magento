import React from 'react';
import { graphql } from 'gatsby';

export const query = graphql`
  query($urlKey: String!) {
    magentoProduct(url_key: { eq: $urlKey }) {
      name
      id
    }
  }
`;
