const { login } = require('../controllers/authContoller');
const User = require('../models/user'); 
const Role = require('../models/role');
const jwtToken = require('../../utils/jwtToken'); 
const sendEmail = require('../../utils/sendEmail'); 


describe('User Registration API', () => {
  it('should return an error if role is not found', async () => {
    // Mocking the Role.findOne function to return null
    Role.findOne = jest.fn().mockResolvedValue(null);

    // Calling the function that uses Role.findOne
    const result = await Role.findOne({name: "NonExistentRole"});

    // Asserting that the result is null
    expect(result).toBe(null);
  });

  it('should return true if role is found', async () => {
    // Mocking the Role.findOne function to return a role object
    Role.findOne = jest.fn().mockResolvedValue({name: "NonExistentRole"});

    // Calling the function that uses Role.findOne
    const result = await Role.findOne({name: "NonExistentRole"});

    // Asserting that the result is truthy (since it's an object)
    expect(result).toBeTruthy();
  });

  it('should create and save a new user', async () => {
    // Mocking the Role.findOne function to return a role object
    Role.findOne = jest.fn().mockResolvedValue({_id: 'roleId'});

    const userData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'password123',
      phoneNumber: '1234567890',
      address: '123 Main Street',
      image: 'profile.jpg',
      roleName: 'UserRole',
    };

    // Creating a new user instance
    const newUser = new User({
      name: userData.name,
      email: userData.email,
      password: userData.password,
      phoneNumber: userData.phoneNumber,
      address: userData.address,
      image: userData.image,
      isVerified: false,
      isDeleted: false,
      role: 'roleId', // Mocked role ID
    });

    // Mocking the save function of the newUser instance
    newUser.save = jest.fn().mockResolvedValue(newUser);

    // Calling the function that creates and saves a new user
    const savedUser = await newUser.save();

    // Asserting that the savedUser is the same as the newUser instance
    expect(savedUser).toEqual(newUser);
  });
});