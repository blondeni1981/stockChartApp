//const { stringify } = require('jade/lib/utils');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StockSchema = new Schema({
    symbol: {
        type: String,
        required: true
    }
},
    { collection: 'Watchlist'}
);

module.exports = mongoose.model("StockSchema", StockSchema);