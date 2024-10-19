import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'; // FontAwesome icons

const FooterWrapper = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 20px;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const ContactText = styled.p`
  margin: 0;
  font-size: 18px;
`;

const Email = styled.p`
  margin: 5px 0;
  font-size: 16px;
  color: #ccc;
`;

const SocialIcons = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 30px;
  transition: color 0.3s;

  &:hover {
    color: #4267B2; /* Change this color on hover */
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <ContactText>Contact Us</ContactText>
      <Email>Email: MentorMate@gmail.com</Email>
      <SocialIcons>
        <SocialIcon href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </SocialIcon>
        <SocialIcon href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </SocialIcon>
      </SocialIcons>
    </FooterWrapper>
  );
};

export default Footer;
