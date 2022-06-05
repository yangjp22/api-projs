import { response } from 'express';
import {users} from './db';

// Query(查询) - 从服务器获取数据
// Mutation(更改) - 修改服务器上的数据并获取更新数据（删除，更新，添加)
// subscription(订阅) - 当希望数据更改时，可以进行消息推送，使用subscription类型（针对当前日趋流行的real-time应用提出来的）


const resolvers = {
    Query: {
        user: (parent, {id}, context, info) => {
            return users.find(item => item.id === id);
        },

        users: (parent, args, context, info) => {
            return users;
        }
    },

    Mutation: {
        createUser: (parent, {id, name, email, age}, context, info) => {
            const newUser = {id, name, email, age};
            users.push(newUser);
            return newUser;
        },

        updateUser: (parent, {id, name, email, age}, context, info) => {
            let newUser = users.find(item => item.id === id);
            newUser.name = name;
            newUser.email = email;
            newUser.age = age;
            return newUser;
        },

        deleteUser: (parent, {id}, context, info) => {
            const userIndex = users.findIndex(item => item.id === id);
            if (userIndex === -1) throw new Error("User not found...")
            let newUser = users[userIndex];
            users.splice(userIndex, 1);
            return newUser;
        }
    }
}

export default resolvers;
