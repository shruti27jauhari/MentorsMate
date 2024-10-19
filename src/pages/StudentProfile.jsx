import React from 'react';
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
  width: 100%; /* Changed to full width */
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
  flex-direction: row; /* Keeps profile image and name in a row */
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
  flex-direction: column; /* Stack heading and session boxes vertically */
  margin-left: 30px;
`;

const UpcomingSessionsHeading = styled.h3`
  margin-bottom: 10px; /* Space between heading and session boxes */
`;

const UpcomingSessions = styled.div`
  display: flex;
  flex-direction: row; /* Stack session boxes vertically */
  gap: 10px; /* Space between session boxes */
  width: 100%; /* Full width of the container */
`;

const SessionBox = styled.div`
  background-color: ${(props) => props.color};
  padding: 10px 20px;
  border-radius: 5px;
  color: black;
  text-align: center;
  width: 100%; /* Full width of the container */
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
  grid-template-columns: repeat(2, 1fr); /* Two cards per row */
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
  return (
    <Container>
     
      <ProfileSection>
        {/* Profile Information Section */}
        <ProfileInfo>
          <ProfileImage src="profile1.jpg" alt="Profile" />
          <ProfileName>Ms. Shruti Jauhari</ProfileName>
        </ProfileInfo>

        {/* Upcoming Sessions Section */}
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

      {/* Layout for Mentor Section and Notifications */}
      <LayoutContainer>
        {/* Left Section with Search and Mentor Cards */}
        <LeftSection>
          <SearchMentorSection>
            <SearchBox>
              <SearchInput type="text" placeholder="Search by company, skills or experience" />
              <SearchButton>Find Mentors</SearchButton>
            </SearchBox>
          </SearchMentorSection>

          <MentorRecommendation>
            <MentorCard>
              <MentorName>Prof. Aarti Singh</MentorName>
              <p>Technical Program Manager - Google</p>
              <MentorTags>
                <Tag>Program Management</Tag>
                <Tag>Project Management</Tag>
                <Tag>Software Engineering</Tag>
              </MentorTags>
            </MentorCard>

            <MentorCard>
              <MentorName>Prof. Ravi Mehta</MentorName>
              <p>Cybersecurity Senior Consultant</p>
              <MentorTags>
                <Tag>Information Security</Tag>
                <Tag>Cloud Security</Tag>
                <Tag>Security Architecture</Tag>
              </MentorTags>
            </MentorCard>

            <MentorCard>
              <MentorName>Prof. Neelam Patel</MentorName>
              <p>Research & Development</p>
              <MentorTags>
                <Tag>Data Science</Tag>
                <Tag>Statistics</Tag>
                <Tag>Python</Tag>
              </MentorTags>
            </MentorCard>

            <MentorCard>
              <MentorName>Prof. Vikram Sharma</MentorName>
              <p>Senior Software Engineer - Microsoft</p>
              <MentorTags>
                <Tag>.NET</Tag>
                <Tag>ASP.NET Core</Tag>
                <Tag>Web Development</Tag>
              </MentorTags>
            </MentorCard>
          </MentorRecommendation>
        </LeftSection>

        {/* Notifications Section on the Right */}
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
