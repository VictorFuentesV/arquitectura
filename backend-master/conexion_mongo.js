const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://oscarlobod01:Tombalobo6@cluster0.br3bzya.mongodb.net/Arqdb', { useNewUrlParser: true, useUnifiedTopology: true });
module.exports = mongoose;