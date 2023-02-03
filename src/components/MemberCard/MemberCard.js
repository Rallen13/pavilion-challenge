import React, { useState, useEffect } from 'react';
import { getMember } from '../../utils/ApiCalls';
import './MemberCard.scss';

const MemberCard = ({ user }) => {
  const [member, setMember] = useState({});

  useEffect(() => {
    try {
      getMember(user.login).then((response) => {
        setMember(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [user.login]);

  return (
    <div className="member-card" data-cy="member-card" key={member.id}>
      <a href={member.url} data-cy="member-url">
        <h2 data-cy="member-login">{member.login}</h2>
      </a>
      <img
        src={member.avatar_url}
        alt={member.name}
        className="member-avatar"
      ></img>
      <h2 data-cy="member-name">{member.name}</h2>
      <h2 data-cy="member-location">{member.location}</h2>
      <h2 data-cy="member-email">{member.email}</h2>
      <h2 data-cy="member-repos">{member.public_repos}</h2>
    </div>
  );
};
export default MemberCard;
