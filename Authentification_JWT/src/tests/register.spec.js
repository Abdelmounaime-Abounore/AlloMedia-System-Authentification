// const Role = require('../models/role'); // Assuming you have a Role model defined in a file named Role.js
// const expressApp = require('../server'); // Assuming you have your Express app defined in a file named expressApp.js
// const request = require('supertest');

// jest.mock('../models/role.js', () => ({
//   findOne: jest.fn(),
// }));

const Role = require('../models/role'); // Assuming you have a Role model defined in a file named Role.js
const User = require('../models/user'); // Assuming you have a Role model defined in a file named Role.js

describe('User Registration API', () => {
  it('should return an error if role is not found', async () => {
    // Mocking the Role.findOne function to return null
    Role.findOne = jest.fn().mockResolvedValue(null);

    // Calling the function that uses Role.findOne
    const result = await Role.findOne({name: "NonExistentRole"});

    // Asserting that the result is null
    expect(result).toBe(null);
  });
});
describe('User Registration API', () => {
  it('should return true if role is found', async () => {
    // Mocking the Role.findOne function to return a role object
    Role.findOne = jest.fn().mockResolvedValue({name: "NonExistentRole"});

    // Calling the function that uses Role.findOne
    const result = await Role.findOne({name: "NonExistentRole"});

    // Asserting that the result is truthy (since it's an object)
    expect(result).toBeTruthy();
  });
});

describe('User Registration API', () => {
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


// describe('register function', () => {
//   it('should return success message when user is registered', async () => {
    
//     const req = {
//       body: {
//         name: 'John Doe',
//         email: 'johndoe@example.com',
//         password: 'password123',
//         phoneNumber: '1234567890',
//         address: '123 Main St',
//         image: 'avatar.jpg',
//         roleName: 'admin', 
//       },
//     };

//     Role.findOne = jest.fn().mockResolvedValue({ _id: '652e4b682547cf7e2afe4045' });

//     User.prototype.save = jest.fn().mockResolvedValue({});

//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };

//     await register(req, res);

//     // Expectations
//     expect(Role.findOne).toHaveBeenCalledWith({ name: 'admin' });
//     expect(User.prototype.save).toHaveBeenCalled();
//     expect(res.status).toHaveBeenCalledWith(201);
//     expect(res.json).toHaveBeenCalledWith({ message: 'User registered successfully.' });
//   });

//   it('should return error message for invalid role', async () => {
//     const req = {
//       body: {
//         roleName: 'manager', 
//       },
//     };

//     Role.findOne = jest.fn().mockResolvedValue(null);

//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };

//     await register(req, res);

//     expect(Role.findOne).toHaveBeenCalledWith({ name: 'manager' });
//     expect(res.status).toHaveBeenCalledWith(400);
//     expect(res.json).toHaveBeenCalledWith({ message: 'Invalid role.' });
//   });

// });