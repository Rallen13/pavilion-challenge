import React from 'react';
import MemberCard from '../MemberCard/MemberCard';
import './MemberCardContainer.scss';

const MemberCardContainer = ({ members }) => {
  const renderedCards = members.map((member) => {
    return <MemberCard key={member.id} user={member} />;
  });

  return (
    <main data-cy="member-card-container" className="member-card-container">
      {renderedCards}
    </main>
  );
};

export default MemberCardContainer;
