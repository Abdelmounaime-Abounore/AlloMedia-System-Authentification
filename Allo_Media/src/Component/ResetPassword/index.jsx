import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import './index.css'

const ResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const searchParams = new URLSearchParams(location.search);
  let token = searchParams.get('token');

  const [formData, setFormData] = useState({
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8080/api/auth/reset-password/${token}`, formData);
      navigate("/login")
      console.log(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (token) {
      token = token.replace(/-/g, '.');
    }
  }, [token]);

    return (
      <div className="forgetPass">
      <div>
          <div className='container'>
              <h1>Reset Password</h1>
              <form onSubmit={handleSubmit}>
                  <div className='form'>
                      <div className='inputs email-inp'>
                          <FontAwesomeIcon icon={faLock} />
                          <input type="password" name='password' placeholder='password .. ' value={formData.password} onChange={handleInputChange} />
                      </div>
                  </div>
                  <div className='buttons'>
                      <div className=''>
                          <button type='submit' className="submit submit-email">Submit</button>
                      </div>
                  </div>
                  <div className='buttons'>
                      <div className='forg-pass-btn'>
                          <Link to="/login"  className="forg-pass-login">Login</Link>
                          <Link to="/" className="state">Register</Link>
                      </div>
                  </div>
              </form>
          </div>
      </div>
  </div>
    );
};

export default ResetPassword;
