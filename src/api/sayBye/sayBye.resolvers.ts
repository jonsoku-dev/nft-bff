import {Resolvers} from "../../types/generated/graphql";

const resolvers: Resolvers = {
    Query: {
        sayBye: () => 'Say Bye',
    },
};

export default resolvers