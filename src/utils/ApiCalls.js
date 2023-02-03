import { Octokit } from '@octokit/core';

const octokit = new Octokit({ auth: process.env.$API_USER_TOKEN });

export const getMemberCards = async () => {
  const response = await octokit.request('GET /users', {
    since: 0,
    per_page: 10,
  });
  return await response;
};
