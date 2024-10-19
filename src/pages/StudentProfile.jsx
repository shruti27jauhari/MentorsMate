import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
  margin: 20px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #4267B2;
`;

const SettingsButton = styled.button`
  padding: 10px 20px;
  background-color: #5a5aff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ProfileSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 20px;
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: #f5f5f5;
  border-radius: 10px;
  margin-top: 20px;
  border: grey 1px solid;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid #ccc;
`;

const ProfileName = styled.h2`
  margin: 0;
`;

const UpcomingSessionsSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

const UpcomingSessionsHeading = styled.h3`
  margin-bottom: 10px;
`;

const UpcomingSessions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
`;

const SessionBox = styled.div`
  background-color: ${(props) => props.color};
  padding: 10px 20px;
  border-radius: 5px;
  color: black;
  text-align: center;
  width: 100%;
`;

const LayoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;
`;

const LeftSection = styled.div`
  width: 70%;
`;

const SearchMentorSection = styled.div`
  margin-bottom: 20px;
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 10px;
  width: 80%;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SearchButton = styled.button`
  padding: 10px;
  background-color: #4267B2;
  color: white;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
`;

const MentorRecommendation = styled.div`
  display: grid;
  border: 1px solid grey;
  padding: 10px;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 30px;
`;

const MentorCard = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  text-align: center;
  width: 86%;
  margin: 10px;
`;

const MentorName = styled.h4`
  margin: 10px 0;
`;

const MentorTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
`;

const Tag = styled.span`
  background-color: #e0e0e0;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 5px;
  font-size: 12px;
`;

const NotificationSection = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  margin-left: 20px;
`;

const NotificationItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #e0e0e0;
`;

const NotificationText = styled.p`
  font-size: 14px;
`;

const StudentProfile = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const mentors = [
    {
      name: 'Prof. Aarti Singh',
      title: 'Technical Program Manager - Google',
      tags: ['Program Management', 'Project Management', 'Software Engineering'],
    },
    {
      name: 'Prof. Ravi Mehta',
      title: 'Cybersecurity Senior Consultant',
      tags: ['Information Security', 'Cloud Security', 'Security Architecture'],
    },
    {
      name: 'Prof. Neelam Patel',
      title: 'Research & Development',
      tags: ['Data Science', 'Statistics', 'Python'],
    },
    {
      name: 'Prof. Vikram Sharma',
      title: 'Senior Software Engineer - Microsoft',
      tags: ['.NET', 'ASP.NET Core', 'Web Development'],
    },
  ];

  // Filter mentors based on the search term
  const filteredMentors = mentors.filter((mentor) =>
    mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    mentor.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    mentor.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Container>
      <ProfileSection>
        <ProfileInfo>
          <ProfileImage src="profile1.jpg" alt="Profile" />
          <ProfileName>Ms. Shruti Jauhari</ProfileName>
        </ProfileInfo>

        <UpcomingSessionsSection>
          <UpcomingSessionsHeading>Upcoming Sessions</UpcomingSessionsHeading>
          <UpcomingSessions>
            <SessionBox color="#D4F4D4">
              <strong>Prof. Ravi Mehta</strong> <br />
              8:00 PM August 1, 2024
            </SessionBox>
            <SessionBox color="#FAD4D4">
              <strong>Prof. Aarti Singh</strong> <br />
              5:00 PM August 4, 2024
            </SessionBox>
          </UpcomingSessions>
        </UpcomingSessionsSection>
      </ProfileSection>

      <LayoutContainer>
        <LeftSection>
          <SearchMentorSection>
            <SearchBox>
              <SearchInput
                type="text"
                placeholder="Search by name, title or tags"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <SearchButton>Find Mentors</SearchButton>
            </SearchBox>
          </SearchMentorSection>

          <MentorRecommendation>
            {filteredMentors.map((mentor, index) => (
              <MentorCard key={index}>
                <MentorName>{mentor.name}</MentorName>
                <p>{mentor.title}</p>
                <MentorTags>
                  {mentor.tags.map((tag, idx) => (
                    <Tag key={idx}>{tag}</Tag>
                  ))}
                </MentorTags>
              </MentorCard>
            ))}
          </MentorRecommendation>
        </LeftSection>

        <NotificationSection>
          <h3>Notifications</h3>
          <NotificationItem>
            <NotificationText>
              Your booking for 4 August, 2024 has been confirmed by Prof. Aarti Singh
            </NotificationText>
          </NotificationItem>
          <NotificationItem>
            <NotificationText>
              You have an upcoming session with Prof. Ravi Mehta on August 1, 2024, at 8:00 PM
            </NotificationText>
          </NotificationItem>
          <NotificationItem>
            <NotificationText>
              You have a new message from Prof. Ravi Mehta
            </NotificationText>
          </NotificationItem>
        </NotificationSection>
      </LayoutContainer>
    </Container>
  );
};

export default StudentProfile;
