import {ApolloServer} from 'apollo-server';
import schema from "./schema";

// サーバーの起動
const server = new ApolloServer({schema});

server.listen().then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
});