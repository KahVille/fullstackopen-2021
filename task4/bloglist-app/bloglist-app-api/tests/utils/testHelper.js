const User = require('../../models/user');

const usersInDatabase = async () => {
    try {
        const users = await User.find({});
        return users;
    } catch (error) {
       console.log(error); 
    }

}

module.exports = { usersInDatabase }