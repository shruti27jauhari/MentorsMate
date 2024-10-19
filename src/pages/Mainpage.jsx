import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const MainPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const mentorSliderRef = useRef(null); // Reference to MentorSlider
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleMentorClick = () => {
    navigate("/ProfilePage"); // Navigate to the ProfilePage
  };

  useEffect(() => {
    const slider = mentorSliderRef.current;
    const interval = setInterval(() => {
      if (slider) {
        // Calculate new scroll position
        const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
        setScrollPosition((prev) => {
          const newScrollPosition = prev + 1;
          return newScrollPosition >= maxScrollLeft ? 0 : newScrollPosition;
        });
      }
    }, 20); // Scroll every 20 milliseconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  useEffect(() => {
    if (mentorSliderRef.current) {
      mentorSliderRef.current.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  return (
    <Container>
      <HeroSection>
        <BackgroundVideo autoPlay muted loop>
          <source src="3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </BackgroundVideo>
        <Overlay />
        <SubHeading>Get right mentorship, land dream career</SubHeading>
        <MainHeading>
          1-on-1 <Highlight>Career</Highlight> | Mentorship
        </MainHeading>
        <CTAButton>Get Started</CTAButton>
        <StatsSection>
          <Stat>
            <StatNumber>75+</StatNumber>
            <StatText>Mentors</StatText>
          </Stat>
          <Stat>
            <StatNumber>100k+</StatNumber>
            <StatText>Users</StatText>
          </Stat>
          <Stat>
            <StatNumber>1M+</StatNumber>
            <StatText>Stories</StatText>
          </Stat>
        </StatsSection>
      </HeroSection>
      <MentorSlider ref={mentorSliderRef}>
        {" "}
        {/* Add ref to MentorSlider */}
        {/* Mentor Card 1 */}
        <MentorCard onClick={handleMentorClick}>
          <MentorImage src="random1.jpeg" alt="Mentor" />
          <MentorInfo>
            <MentorName>Rajesh Kumar</MentorName>
            <MentorTitle>Senior Software Engineer</MentorTitle>
            <Rating>⭐ 4.8</Rating>
            <Tags>
              <Tag>Software Development</Tag>
              <Tag>Cloud Computing</Tag>
            </Tags>
          </MentorInfo>
        </MentorCard>
        <MentorCard onClick={handleMentorClick}>
          <MentorImage src="random6.jpg" alt="Mentor" />
          <MentorInfo>
            <MentorName>Neha Patel</MentorName>
            <MentorTitle>UX/UI Designer</MentorTitle>
            <Rating>⭐ 4.9</Rating>
            <Tags>
              <Tag>Design Thinking</Tag>
              <Tag>User Research</Tag>
            </Tags>
          </MentorInfo>
        </MentorCard>
        <MentorCard onClick={handleMentorClick}>
          <MentorImage src="random2.jpeg" alt="Mentor" />
          <MentorInfo>
            <MentorName>Amit Sharma</MentorName>
            <MentorTitle>Data Scientist</MentorTitle>
            <Rating>⭐ 5.0</Rating>
            <Tags>
              <Tag>Machine Learning</Tag>
              <Tag>Data Analysis</Tag>
            </Tags>
          </MentorInfo>
        </MentorCard>
        <MentorCard onClick={handleMentorClick}>
          <MentorImage src="random3.jpeg" alt="Mentor" />
          <MentorInfo>
            <MentorName>Pooja Gupta</MentorName>
            <MentorTitle>Product Manager</MentorTitle>
            <Rating>⭐ 4.7</Rating>
            <Tags>
              <Tag>Product Development</Tag>
              <Tag>Project Management</Tag>
            </Tags>
          </MentorInfo>
        </MentorCard>
        <MentorCard onClick={handleMentorClick}>
          <MentorImage src="random4.jpeg" alt="Mentor" />
          <MentorInfo>
            <MentorName>Vikram Singh</MentorName>
            <MentorTitle>Full Stack Developer</MentorTitle>
            <Rating>⭐ 4.6</Rating>
            <Tags>
              <Tag>Web Development</Tag>
              <Tag>Backend Systems</Tag>
            </Tags>
          </MentorInfo>
        </MentorCard>
        <MentorCard onClick={handleMentorClick}>
          <MentorImage src="random6.jpg" alt="Mentor" />
          <MentorInfo>
            <MentorName>Simran Kaur</MentorName>
            <MentorTitle>Digital Marketing Specialist</MentorTitle>
            <Rating>⭐ 4.8</Rating>
            <Tags>
              <Tag>SEO</Tag>
              <Tag>Content Strategy</Tag>
            </Tags>
          </MentorInfo>
        </MentorCard>
      </MentorSlider>
    </Container>
  );
};

export default MainPage;

// Styled Components - Remain unchanged
const Container = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f7f7f7;
`;

const HeroSection = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
  text-align: center;
  padding: 60px;
  height: 600px;
  position: relative; /* Added for positioning */
  overflow: hidden; /* Prevents overflow of video */
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the video covers the section */
  filter: blur(5px); /* Blurs the video */
  z-index: 0; /* Puts video behind other content */
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Dark overlay for better text visibility */
  z-index: 1; /* Places overlay above the video */
`;

const SubHeading = styled.h2`
  color: #fff; /* Changed color for visibility */
  z-index: 1; /* Places text above the video */
  position: relative; /* Added for stacking context */
`;

const MainHeading = styled.h1`
  font-size: 68px;
  color: #fff; /* Changed color for visibility */
  margin: 20px 0;
  z-index: 1; /* Places text above the video */
  position: relative; /* Added for stacking context */
`;

const Highlight = styled.span`
  color: #9ba1ff;
`;

const CTAButton = styled.button`
  background-color: #3f63ff;
  color: #fff;
  padding: 12px 24px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  margin: 30px 0;
  cursor: pointer;
  z-index: 1; /* Places button above the video */
  position: relative; /* Added for stacking context */
`;

const StatsSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  margin: 10px 0;
`;

const Stat = styled.div`
  text-align: center;
`;

const StatNumber = styled.h2`
  font-size: 32px;
  color: #fff; /* Changed color for visibility */
`;

const StatText = styled.p`
  font-size: 18px;
  color: #ddd; /* Changed color for visibility */
`;

const MentorSlider = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 40px;
  background-color: #e4e7ff;
  scroll-behavior: smooth;
  margin: 20px;
`;

const MentorCard = styled.div`
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
`;

const MentorImage = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 20px;
`;

const MentorInfo = styled.div`
  text-align: left;
`;

const MentorName = styled.h4`
  font-size: 18px;
  color: #333;
`;

const MentorTitle = styled.p`
  color: #777;
  margin: 5px 0;
`;

const Rating = styled.p`
  font-size: 16px;
  color: #ffa500;
`;

const Tags = styled.div`
  display: flex;
  gap: 10px;
`;

const Tag = styled.span`
  background-color: #f1f1f1;
  color: #333;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
`;
