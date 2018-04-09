const mongoose = require('../libs/mongoose');

const newsSchema = new mongoose.Schema({
    material: {
        type: String,
        required: 'Укажите поле material',
        enum:       ['plastic', 'aluminum'],
    },
    model: {
        type: String,
        required: 'Укажите поле model'
    },
    name: {
        type: String,
        required: 'Укажите поле name'
    },
    description: {
        type: String,
        required: 'Укажите поле description'
    },
    length: {
        type: Number,
        required: 'Укажите поле length'
    },
    width: {
        type: Number,
        required: 'Укажите поле width'
    },
    weight: {
        type: Number,
        required: 'Укажите поле weight'
    },
    spaciousness: {
        type: Number,
        required: 'Укажите поле spaciousness'
    },
    img: {
        type: String,
        required: 'Укажите поле img'
    },
    col_img: {
        type: Number,
        required: 'Укажите поле col_img'
    }
}, {
  timestamps: true
});

module.exports = mongoose.model('boats', newsSchema);