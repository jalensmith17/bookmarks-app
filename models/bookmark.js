const { model, Schema } = require('mongoose')


const bookmarkSchema = new Schema ({
    title: { required: true, type: String },
    url: { required: true, type: String }
}, {
    timestamps: true
})


module.exports = model('Bookmark', bookmarkSchema)