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
      <img
        src={member.avatar_url}
        alt={member.name}
        data-cy="member-avatar"
        className="member-avatar"
      ></img>
      <a className="member-link" href={member.url} data-cy="member-link">
        <h2 data-cy="member-login">{member.login}</h2>
      </a>
      <h3 className="member-name" data-cy="member-name">
        {member.name}
      </h3>
      {member.location && <p data-cy="member-location">{member.location}</p>}
      {member.email && <p data-cy="member-email">{member.email}</p>}
      {member.public_repos && (
        <p data-cy="member-repos">Public Repos: {member.public_repos}</p>
      )}
    </div>
  );
};
export default MemberCard;
