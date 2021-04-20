/* eslint-disable */
import '@babel/polyfill';
import e from 'express';
import { login, logout } from './login';
import { displayMap } from './mapbox';
import { updateSettings } from './updateSettings';

// Set dom elements
const mapBox = document.getElementById('map');
const loginForm = document.querySelector('.form--login');
const logoutBtn = document.querySelector('.nav__el--logout');
const userDataForm = document.querySelector('.form-user-data');
const userPasswordForm = document.querySelector('.form-user-password');

// maps render
if (mapBox) {
  const locations = JSON.parse(mapBox.dataset.locations);
  displayMap(locations);
}

// login form

if (loginForm) {
  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });
}

// logout Trigger

if (logoutBtn) {
  logoutBtn.addEventListener('click', logout);
}

// User data | name email | password
if (userDataForm) {
  userDataForm.addEventListener('submit', e => {
    console.log('s');
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    updateSettings({ name, email }, 'data');
  });
}

// Use password update function

if (userPasswordForm) {
  userPasswordForm.addEventListener('submit', async e => {
    e.preventDefault();
    document.querySelector('.btn-save-password').textConten = 'Updating...';
    const passwordCurrent = document.getElementById('password-current').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;
    await updateSettings(
      { passwordCurrent, password, passwordConfirm },
      'password'
    );

    document.querySelector('.btn--save-password').textContent = 'Save password';
    document.getElementById('password-current').value = '';
    document.getElementById('password').value = '';
    document.getElementById('password-confirm').value = '';
  });
}
