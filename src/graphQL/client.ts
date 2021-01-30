import {GraphQLClient} from 'graphql-request'
const graphQLClient  = new GraphQLClient("https://frozen-woodland-48252.herokuapp.com/graphql",{
    headers: {
      "x-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlXyI6IkFETUlOIiwiX2lkIjoiNjAxM2UwNTFmODZlYzQyZjM0NWUyZTI4IiwidXNlcm5hbWUiOiJBZG1pbiIsImlhdCI6MTYxMTkxNTM0NSwiZXhwIjoxNjE0NTA3MzQ1fQ.fNa8j5t6QnIMXzdF0z3WQYqgtZwrBMT2aFmDdnAlt0k",
    },

});

export default graphQLClient ;