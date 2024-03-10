const bcrypt = require('bcrypt');

const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(12 , (err,salt)=>{
            if (err) return reject(err);
            bcrypt.hash(password,salt, (err,hash)=>{
                if (err) return reject(err);
                resolve(hash);
            })
        })
    })
}

const comparePassword = (password, hashed) => {
    return bcrypt.compare(password, hashed);
}


// const hashPassword = async (password) => {
//     try {
//         const hash =await bcrypt.hash(password,12);
//         return hash;
//     }
//     catch{
//         console.log(error)
//     }
// }
// const comparePassword = (password, hashed) => {
//     return bcrypt.compare(password, hashed);
// }


module.exports = {
    hashPassword,
    comparePassword
}