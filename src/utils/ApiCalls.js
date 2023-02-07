import { Octokit } from '@octokit/core';

const API_TOKEN = process.env.REACT_APP_API_TOKEN;
/* must abstract the token to a variable for process.env to work */

const octokit = new Octokit({ auth: API_TOKEN });

export const getMembers = async (since) => {
  const response = await octokit.request('GET /users', {
    since: since,
    per_page: 10,
  });
  return await response;
};

export const getMember = async (login) => {
  const response = await octokit.request('GET /users/{username}', {
    username: login,
  });
  return await response;
};
