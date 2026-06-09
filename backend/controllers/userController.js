const registerUser = (req, res) => {

    const { name, email, password } = req.body;

    res.json({
        message: "User Registered Successfully ",
        user: {
            name,
            email,
        },
    });

};

module.exports = {
    registerUser,
};