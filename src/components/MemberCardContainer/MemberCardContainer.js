import React from 'react';
import './MemberCardContainer.scss';

const MemberCardContainer = ({ members }) => {
  const renderedCards = members.map((member) => {
    return (
      <div className="member-card" data-cy="member-card" key={member.id}>
        <h2 data-cy="member-name">{member.login}</h2>
      </div>
    );
  });

  return <main className="member-card-container">{renderedCards}</main>;
};

export default MemberCardContainer;
