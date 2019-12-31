const mongoose = require('mongoose');
const uuidv1 = require('uuid/v1');
const crypto = require('crypto');


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        require:true
    },
    email:{
        type: String,
        trim: true,
        require:true
    },
    hashed_password:{
        type: String,
        require:true
    },
    salt: String,
    create:{
        type: Date,
        default: Date.now
    },
    update: Date
})


/**
 * Virtual fields are addition fields for a given model.
 * Their values can be set manuall or automatically with defiend functionality.
 * Keep in mind: Virtual properties (password) don't get persisted in the database.
 * They only exist logically and are not written to the document's conllection
 * 
 */


// virtual field
userSchema
    .virtual("password")
    .set(function(password) {
        // create temporary variable called _password
        this._password = password;
        // generate a timestamp
        this.salt = uuidv1();   //
        // encryptPassword()
        this.hashed_password = this.encryptPassword(password);
    })
    .get(function() {
        return this._password;
    });

// methods
userSchema.methods = {  // Add encrpty password function
    encryptPassword: function(password) {
        if (!password) return "";
        try {
            return crypto
                .createHmac("sha1", this.salt)
                .update(password)
                .digest("hex");
        } catch (err) {
            return "";
        }
    },

    authenticate: function(plainText){
        return this.encryptPassword(plainText) === this.hashed_password

    }  

};


module.exports = mongoose.model("User",userSchema);