import { gql } from '@apollo/client';

export const ALL_PRODUCTS = gql`
  query getAllProducts($input: CategoryInput) {
    category(input: $input) {
      name
      products {
        id
        name
        inStock
        gallery
        description
        category
        attributes {
          name
          type
          items {
            displayValue
            value
          }
        }
        prices {
          currency {
            symbol
            label
          }
          amount
        }
        brand
      }
    }
  }
`

export const GET_CATEGORIES = gql`
  query getCategories {
    categories {
      name
    }
  }
`

export const ONE_PRODUCT = gql`
  query getOneProduct($productId: String!) {
    product(id: $productId) {
      id
      name
      inStock
      gallery
      description
      category
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
      prices {
        currency {
          label
          symbol
        }
        amount
      }
      brand
    }
  }
`

export const GET_CURRENCY = gql`
  query getCurrency {
    currencies {
      label
      symbol
    }
  }
`
