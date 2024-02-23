const { response } = require("express");

const loginController = {};

loginController.selectLogin = async (req, res = response) => {
  try {
    console.log('Controlador selectLogin alcanzado');
    res.render('login');
  } catch (error) {
    console.error('Error:', error);
    return res
      .status(500)
      .render('error', { message: 'Error' });
  }
};

module.exports = loginController;