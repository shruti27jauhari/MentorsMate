// src/pages/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signOut,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase"; // Import the Firebase auth instance
import styled from "styled-components";

// Google Auth Provider setup
const provider = new GoogleAuthProvider();

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("mentee");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Check if email is verified
      if (!user.emailVerified) {
        alert("Please verify your email before logging in.");
        await signOut(auth); // Sign out if the email is not verified
        return;
      }

      console.log("Logged in as:", user.email);
      setIsAuthenticated(true); // Update the authentication state
      navigate("/"); // Navigate to the main page on successful login
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Invalid email or password. Please try again.");
    }
  };

  // Google sign-in function
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User signed in with Google:", user);
      setIsAuthenticated(true); // Update the authentication state
      navigate("/"); // Navigate to the main page after successful Google sign-in
    } catch (error) {
      console.error("Error during Google sign-in:", error.message);
      alert("Error during Google sign-in. Please try again.");
    }
  };

  return (
    <Container>
      <LeftPanel>
        <LogoContainer>
          <LogoImage src="/logo.png" alt="Mentor Logo" />
          <LogoText>
            Mentor<span>Mate</span>
          </LogoText>
        </LogoContainer>
      </LeftPanel>
      <RightPanel>
        <LoginForm>
          <LoginTitle>Log in</LoginTitle>
          <Tabs>
            <Tab
              $isActive={activeTab === "mentee"}
              onClick={() => setActiveTab("mentee")}
            >
              I'm a mentee
            </Tab>
            <Tab
              $isActive={activeTab === "mentor"}
              onClick={() => setActiveTab("mentor")}
            >
              I'm a mentor
            </Tab>
          </Tabs>
          <Form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder={`Email or username (${activeTab})`}
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
            <Button type="submit">Log in</Button>
            <OrDivider>Or</OrDivider>
            <GoogleButton onClick={signInWithGoogle}>
              Log in with Google
            </GoogleButton>
          </Form>
          <Links>
            <ForgotPassword href="#">Forgot Password?</ForgotPassword>
            <Signup>
              Don't have an account?{" "}
              <SignupLink onClick={() => navigate("/signup")}>
                Sign up as a mentee
              </SignupLink>{" "}
              or{" "}
              <SignupLink onClick={() => navigate("/signup")}>
                Apply to be a mentor
              </SignupLink>
            </Signup>
          </Links>
        </LoginForm>
      </RightPanel>
    </Container>
  );
};

export default Login;

// Styled Components (same as before)
const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const LeftPanel = styled.div`
  background-color: #e0f4ff;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  align-items: center;
  justify-content: center;
`;

const LoginForm = styled.div`
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

const LoginTitle = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Tab = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  border-bottom: ${(props) => (props.$isActive ? "2px solid #0a8f00" : "none")};
  color: ${(props) => (props.$isActive ? "#0a8f00" : "#999")};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #0a8f00;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const OrDivider = styled.div`
  margin: 10px 0;
  color: #aaa;
`;

const GoogleButton = styled.button`
  padding: 10px;
  background-color: #db4437;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Links = styled.div`
  margin-top: 20px;
  font-size: 14px;
`;

const ForgotPassword = styled.a`
  color: #0a8f00;
`;

const Signup = styled.div``;

const SignupLink = styled.span`
  color: #0a8f00;
  cursor: pointer;
`;
