import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ProfilePage = () => {
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [buttonStatus, setButtonStatus] = useState("Schedule"); // Initial button state
  const [selectedDate, setSelectedDate] = useState(null);

  // Predefined Google Meet link (can be generated and assigned by mentor)
  const googleMeetLink = "https://meet.google.com/evv-bwmj-bni";

  const handleScheduleClick = () => {
    // Show the calendar when the schedule button is clicked
    setIsCalendarVisible(true);
  };

  const handleDateChange = (date) => {
    // Set the selected date and change the button state
    setSelectedDate(date);
    setButtonStatus("Awaiting Confirmation");
    setIsCalendarVisible(false);
  };

  const handleConfirmation = () => {
    // Simulate confirmation by changing the button state
    setButtonStatus("Scheduled");
  };

  return (
    <Container>
      <Header />
      <Content>
        <ProfileCard>
          <ProfileImage />
          <ProfileInfo>
            <Name>Prof. Aanand Raje</Name>
            <Designation>HoD vrt, Rajasthan</Designation>
            <Rating>4.7 ⭐⭐⭐⭐</Rating>
            <FollowButton>Follow</FollowButton>
          </ProfileInfo>
        </ProfileCard>
        <StatsCard>
          <Stats>
            <Stat>
              <StatNumber>20k</StatNumber>
              <StatLabel>Followers</StatLabel>
            </Stat>
            <Stat>
              <StatNumber>50k</StatNumber>
              <StatLabel>Mentees</StatLabel>
            </Stat>
            <Stat>
              <StatNumber>15</StatNumber>
              <StatLabel>Articles</StatLabel>
            </Stat>
          </Stats>
          <Expertise>
            <ExpertiseTitle>Areas of Expertise:</ExpertiseTitle>
            <ExpertiseTags>
              <Tag>Data Science</Tag>
              <Tag>Machine Learning</Tag>
              <Tag>Artificial Intelligence</Tag>
              <Tag>Cloud Computing</Tag>
            </ExpertiseTags>
          </Expertise>
        </StatsCard>
        <ScheduleCard>
          <ScheduleTitle>Schedule a Online Meet:</ScheduleTitle>
          <AvailableDate>
            Available for Meet on: Sunday 04 August 2024
          </AvailableDate>
          <ScheduleButton
            onClick={
              buttonStatus === "Schedule"
                ? handleScheduleClick
                : handleConfirmation
            }
            style={{
              backgroundColor:
                buttonStatus === "Awaiting Confirmation"
                  ? "#FFD700"
                  : buttonStatus === "Scheduled"
                  ? "#32CD32"
                  : "#3f63ff",
            }}
          >
            {buttonStatus}
          </ScheduleButton>

          {/* Google Meet button appears only when the status is 'Scheduled' */}
          {buttonStatus === "Scheduled" && (
            <GoogleMeetButton href={googleMeetLink} target="_blank">
              Join Google Meet
            </GoogleMeetButton>
          )}

          <Connect>
            <ConnectTitle>Connect:</ConnectTitle>
            <SocialIcons>
              <Icon>✉️</Icon>
              <Icon>🔗</Icon>
              <Icon>🔍</Icon>
              <Icon>🕵️</Icon>
              <Icon>📸</Icon>
              <Icon>▶️</Icon>
            </SocialIcons>
          </Connect>
        </ScheduleCard>
      </Content>
      <AboutSection>
        <AboutTitle>About:</AboutTitle>
        <p>Aanand Raje</p>
        <p>Designation: Professor</p>
        <p>Department: Computer Engineering</p>
        <p>Date of Birth: 26th February 1974</p>
        <p>Some Prominent projects are:</p>
        <ul>
          <li>
            End to End automation of retail operation in Japan for global luxury
            brand chains.
          </li>
          <li>
            Large Migration Program for creating a Bank in a Box for a leading
            bank in the UK.
          </li>
          <li>
            Legacy Modernization - API enablement of the core banking
            applications for a leading bank in the UK.
          </li>
          <li>
            Application Discovery for fees, charges, and billing applications
            for migration to a product.
          </li>
          <li>
            Integration of core banking mainframe applications with off-host
            lending applications for seamless banking experience.
          </li>
          <li>
            RPA solution for customer relationship management and KYB
            regulations for a Spanish bank.
          </li>
        </ul>
      </AboutSection>

      {isCalendarVisible && (
        <CalendarModal>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            inline
          />
          <SendRequestButton onClick={() => setIsCalendarVisible(false)}>
            Send Request
          </SendRequestButton>
        </CalendarModal>
      )}
    </Container>
  );
};

export default ProfilePage;

// Styled Components
const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
`;

// Add Google Meet Button Styling
const GoogleMeetButton = styled.a`
  display: inline-block;
  margin-top: 10px;
  margin: 5px;
  padding: 5px 10px;
  background-color: #4285f4;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  &:hover {
    background-color: #357ae8;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  span {
    color: #7a80ff;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 16px;
`;

const SettingsButton = styled.button`
  background-color: #6a75ff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const ProfileCard = styled.div`
  width: 20%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.div`
  width: 80px;
  height: 80px;
  background-color: #e0e0e0;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const ProfileInfo = styled.div`
  text-align: center;
`;

const Name = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
`;

const Designation = styled.p`
  font-size: 14px;
  color: #777;
`;

const Rating = styled.p`
  margin: 10px 0;
`;

const FollowButton = styled.button`
  background-color: #3f63ff;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const StatsCard = styled.div`
  width: 45%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const Stat = styled.div`
  text-align: center;
`;

const StatNumber = styled.h4`
  font-size: 22px;
  color: #333;
`;

const StatLabel = styled.p`
  color: #777;
`;

const Expertise = styled.div`
  margin-top: 20px;
`;

const ExpertiseTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ExpertiseTags = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background-color: #e0e0e0;
  padding: 5px 10px;
  border-radius: 5px;
`;

const ScheduleCard = styled.div`
  width: 30%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const ScheduleTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 10px;
`;

const AvailableDate = styled.p`
  margin-bottom: 20px;
  color: #333;
`;

const ScheduleButton = styled.button`
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Connect = styled.div`
  margin-top: 20px;
`;

const ConnectTitle = styled.h4`
  font-size: 16px;
  margin-bottom: 10px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
`;

const Icon = styled.span`
  font-size: 24px;
`;

const AboutSection = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  border: 2px solid #0066ff;
  border-radius: 8px;
`;

const AboutTitle = styled.h4`
  font-size: 18px;
  color: #333;
`;

const CalendarModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const SendRequestButton = styled.button`
  margin-top: 10px;
  background-color: #3f63ff;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
