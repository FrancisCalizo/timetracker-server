// @route     POST /login
// @desc      Logout
// @access    Public
module.exports = async (_, res) => {
  try {
    // Clear the cookie
    res.clearCookie('token');

    // Return 200 Success Response
    return res.json(200);
      
  } catch (err) {
    // Something went horribly wrong
    console.log(err.message);
    res.status(500).send('Something went wrong with login');
  }
};