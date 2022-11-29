const { model, Schema } = require('mongoose');

const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    likes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    pet: {
        type: Schema.Types.ObjectId,
        ref: 'Pet',
    },
    comments: [{
        author: {
            type: Schema.Types.ObjectId,
            ref: 'Pet',
        },
        body: {
            type: String,
            required: true,
        },
    }],

});

module.exports = model('post', PostSchema);
