import {loadFilesSync} from "@graphql-tools/load-files";
import * as path from "path";
import {makeExecutableSchema} from "@graphql-tools/schema";
import {mergeResolvers, mergeTypeDefs} from "@graphql-tools/merge";

const allTypes = loadFilesSync(path.join(__dirname, './api/**/*.graphql'))
const allResolvers = loadFilesSync(path.join(__dirname, './api/**/*.resolvers.*'))

const schema = makeExecutableSchema({typeDefs: mergeTypeDefs(allTypes), resolvers: mergeResolvers(allResolvers)})

export default schema