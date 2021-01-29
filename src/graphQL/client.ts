import {GraphQLClient} from 'graphql-request'
const graphQLClient  = new GraphQLClient("https://frozen-woodland-48252.herokuapp.com/graphql",{
    headers: {
      "x-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlXyI6IkVESVRPUiIsIl9pZCI6IjVmZjk2YTVlMzgzZTI2NGU4MDNkNWUxOCIsInVzZXJuYW1lIjoiS2hhaSBQaGFtIiwiaWF0IjoxNjExODY4NDk2LCJleHAiOjE2MTQ0NjA0OTZ9.CcwKo9f_Y3eS6e2zOYwhn4n3oC2VKM__yG6Cd0sdqk0",
    },

});

export default graphQLClient ;