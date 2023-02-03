import { Octokit } from '@octokit/core';

const octokit = new Octokit({ auth: process.env.$API_USER_TOKEN });

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
