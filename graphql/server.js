const express = require('express');

const { graphqlHTTP } = require('express-graphql');
const {GraphQLSchema} = require('graphql');

const {queryType} = require('./query.js');


let app = express();

// Define the Schema
// GraphQL只有一个外部端点/graphql 。 这个端点可以有多个其他端点来做各种事情。 这些端点将在模式中指定
const schema = new GraphQLSchema({query: queryType});


// Setup the nodejs GraphQL server
// graphqlHTTP使我们能够在/ graphql URL处设置GraphQL服务器。 它知道如何处理即将到来的请求
// graphiql是一个Web UI，可用于测试GraphQL端点。 我们将其设置为true，以便更轻松地测试我们创建的各种GraphQL端点
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}))


app.get('/home', (req, res) => {
    res.send("hello world");
})

app.listen('8080', () => {
    console.log('I am listening...')
})