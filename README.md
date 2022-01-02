<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  JAMstack Demo: Gatsby & Magento2
</h1>

## 👷‍♂️ IMPORTANT: POC & WIP

This is a Proof Of Concept and still a Work In Progress.
So don't be alarmed if it looks like 💩, right now.

Note: For testing purpose, the app is configured to only fetch **5 products**. You can edit the `pageSize` in [./src/graphql/allProductsQuery.js]() if you want to experiment with more products.

## 🚀 Quick start

0. Make sure you have the core dependencies installed:

- A current version of [git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) - Version 16+
- (Optionally:) This project comes with some pre-configuration for [VS Code](https://code.visualstudio.com/) but will work with pretty much every IDE

1. Clone this repo & install dependencies

   ```bash
   # clone repo
   git clone https://github.com/prosellen/jamstack-demo-gatsby-magento.git

   # change to the project directory
   cd jamstack-demo-gatsby-magento

   # install node dependencies (this will take a couple of minutes)
   npm install
   ```

2. **Configure the app**

   The app needs a GraphQL endpoint ... which we do not push to GitHub for security reasons.

   Nake a copy of the `.env-template` file and name it `.env`.  
   Then, add the GraphQL of your Magento2 installation into this file:

   ```txt
   MAGENTO_GRAPHQL_ENDPOINT=http://[magento.installation]/graphql
   ```

3. **Start the dev server**

   Start the local dev server and

   ```bash
   # ... in the project directory:
   npm run develop
   ```

4. **Open the code and start customizing!**

   Your site is now running at <http://localhost:8000>!

5. **Learn more**

   - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

   - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

   - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

   - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

   - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

   - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
