// userService.js

const { registerUser } = require('../database/userDB');

const registerUserService = async (username, email, password) => {
    try {
        const newUser = await registerUser(username, email, password);
        return { message: 'User registered successfully', user: newUser };
    } catch (error) {
        throw { error: 'Internal Server Error' };
    }
};

module.exports = { registerUserService };
