const faker = require('faker');
const Post = require('./models/post');

async function seedPosts() {
    await Post.remove({});
    for (const i of new Array(40)) {
        const post = {
            title: faker.lorem.word(),
            description: faker.lorem.text(),
            author: {
                '_id': '5e2869431ab79426c400be1b',
                'username': 'jonascoder'
            }
        }
        await Post.create(post);
    }
    console.log('40 new post created');
}

module.exports = seedPosts;