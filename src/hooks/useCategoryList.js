import { graphql, useStaticQuery } from "gatsby"

export const useCategoryList = () => {
  const { categories } = useStaticQuery(
    graphql`
      query CategoryQuery {
        categories: allMagentoCategory {
          nodes {
            url_key
            name
            level
            landing_page
            id
            parent_category_id
          }
        }
      }
    `
  )

  return categories.nodes
}