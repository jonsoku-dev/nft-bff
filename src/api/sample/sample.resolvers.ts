import {Resolvers} from "../../generated/graphql";

const resolvers: Resolvers = {
    Query: {
        sample: () => 'sample',
    },
};

export default resolvers