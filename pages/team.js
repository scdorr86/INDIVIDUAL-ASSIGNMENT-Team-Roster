/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { getTeamMembers } from '../api/memberData';
import MemberCard from '../components/MemberCard';

export default function TeamHome() {
  // state for members
  const [members, setMembers] = useState([]);

  // get user ID
  const { user } = useAuth();

  // function for API call
  const getWholeTeam = () => {
    getTeamMembers(user.uid).then(setMembers);
    console.warn('team:', setMembers);
  };

  // call to API to get books on component render
  useEffect(() => {
    getWholeTeam();
  }, []);

  return (
    <div className="text-center my-4">
      <Link href="/team/new" passHref>
        <Button>Add A Member</Button>
      </Link>
      <h1>The TEAM: {members.teamName}</h1>
      <div className="d-flex flex-wrap">
        {/* map over members using MemberCard component */}
        { members.map((member) => (
          <MemberCard key={member.firebaseKey} memberObj={member} onUpdate={getWholeTeam} />
        ))}
      </div>

    </div>
  );
}
