import axios from 'axios';
import {gql} from '@apollo/client'
import graphQLClient from '../graphQL/client';
import _ from 'lodash';

export const api = axios.create({
  baseURL: 'https://api.github.com',
});

export const getTestGQL = async ()=>{
  return await graphQLClient.request(
gql`
    query {
      getAllPost(q: {
        limit: 10
      }) {
        data {
    id
    content
    images
    videos
    commentIds
    like
    tags
    petTags
    share
        }
      }
    }
    `
  ).then((data)=>{
    return data.getAllPost.data
  });
}

