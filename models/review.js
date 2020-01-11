const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ReviewSchema = new Schema({
    body: String,
    author: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
});
ReviewSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('Review', ReviewSchema);