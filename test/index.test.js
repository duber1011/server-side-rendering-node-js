const request = require('supertest');
const express = require('express');
const app = require('../src/index');

describe('SSR APIs Test', () => {
  it('Must respond with the same content as the home page', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Hello World!');
    expect(response.text).toContain(
      'Hello World from server-side rendering with Node.js and EJS!'
    );
  });

  it('must respond with the list of users', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Users List');
    expect(response.text).toContain('Jonh');
    expect(response.text).toContain('Lucy');
    expect(response.text).toContain('Peter');
  });
});
