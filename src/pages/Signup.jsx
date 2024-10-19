import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase"; // Firebase configuration
import styled from "styled-components";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!email || !password || !confirmPassword) {
      alert("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      alert("Password should be at least 6 characters.");
      return;
    }

    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("Signed up as:", user.email);

      // Send email verification
      await sendEmailVerification(user);
      setIsEmailSent(true);

      // Show message for successful signup
      alert("Sign-up successful! Please check your email for verification.");

      // Clear input fields
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      // Do NOT navigate automatically, wait for email verification
    } catch (error) {
      let errorMessage;

      switch (error.code) {
        case "auth/weak-password":
          errorMessage = "Password should be at least 6 characters.";
          break;
        case "auth/email-already-in-use":
          errorMessage = "Email is already in use.";
          break;
        case "auth/invalid-email":
          errorMessage = "Invalid email address.";
          break;
        default:
          errorMessage = "Error during sign up. Please try again.";
          console.error("Error signing up:", error);
      }

      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <LeftPanel>
        <LogoContainer>
          <LogoImage src="logo.png" alt="Mentor Logo" />
          <LogoText>
            Mentor<span>Mate</span>
          </LogoText>
        </LogoContainer>
      </LeftPanel>
      <RightPanel>
        <SignupForm onSubmit={handleSubmit}>
          <SignupTitle>Sign Up</SignupTitle>
          <Form>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <Button type="submit" disabled={loading}>
              {loading ? "Signing up..." : "Sign Up"}
            </Button>
            <LoginLink>
              Already signed up? Click here to{" "}
              <LoginLinkText onClick={() => navigate("/login")}>
                Log in
              </LoginLinkText>
            </LoginLink>
          </Form>
          {isEmailSent && (
            <VerificationMessage>
              A verification email has been sent to {email}. Please verify your
              email before logging in.
            </VerificationMessage>
          )}
        </SignupForm>
      </RightPanel>
    </Container>
  );
};

export default Signup;

// Styled components for styling
const VerificationMessage = styled.p`
  margin-top: 20px;
  color: #0a8f00;
`;

const Container = styled.div`
  display: flex;
  margin-top: 100px;
  height: 90vh;
`;

const LeftPanel = styled.div`
  background-color: #e0f4ff;
  width: 40%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoContainer = styled.div`
  text-align: center;
`;

const LogoImage = styled.img`
  width: 150px;
  margin-bottom: 20px;
`;

const LogoText = styled.h1`
  font-size: 24px;
  color: #948282;

  span {
    color: #f1c40f;
  }
`;

const RightPanel = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  height: 450px;
`;

const SignupForm = styled.form`
  width: 100%;
  max-width: 400px;
  text-align: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const SignupTitle = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;

  &:focus {
    border-color: #0a8f00;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #0a8f00;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const LoginLink = styled.p`
  margin-top: 20px;
  color: #333;
`;

const LoginLinkText = styled.span`
  color: #0a8f00;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;
