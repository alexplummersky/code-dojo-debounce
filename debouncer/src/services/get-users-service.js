import {
  ApolloClient,
  InMemoryCache,
  gql,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export const getUsers = (username) => {
  const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql",
  });

  const token = "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";

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const getUser = client.query({
    query: gql`
            query {
              search(query: "${username}", type: USER, first: 10) {
                  edges {
                      node {
                        ... on User {
                            login
                            id
                            avatarUrl
                        }
                      }
                  }
              }
            }
          `,
  });

  return getUser;
};
