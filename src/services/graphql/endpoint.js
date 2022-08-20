import { request } from 'graphql-request';

export async function graphqlRun(query, variables) {
  const data = await request('http://localhost:3000/graphql', query, variables)
    .catch((error) => console.log(error))
  return {data};
};

