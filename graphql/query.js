const { query } = require('express');
const {GraphQLObjectType, GraphQLString} = require('graphql');

// Query(查询) - 从服务器获取数据
// Mutation(更改) - 修改服务器上的数据并获取更新数据（删除，更新，添加)
// subscription(订阅) - 当希望数据更改时，可以进行消息推送，使用subscription类型（针对当前日趋流行的real-time应用提出来的）



// Define the query
// queryType is created as a GraphQLObjectType and given the name Query.

const queryType = new GraphQLObjectType({
    name: 'Query',
    // fields are where we specify the various endpoints
    fields: {
        // So here we are adding one endpoint called hello.
        hello: {
            // hello具有GraphQLString的类型 ，这意味着此端点的返回类型为String。 类型是GraphQLString而不是String，因为这是GraphQL模式。 因此，直接使用String是行不通的
            type: GraphQLString,
            // resolve函数指示调用端点时要执行的操作。 此处的操作是返回字符串“ Hello World”
            resolve: function() {
                return "hello world";
            }
        },

        movie: {
            type: GraphQLString,
        },

        director: {
            type: GraphQLString,
        }
    }
})

exports.queryType = queryType;