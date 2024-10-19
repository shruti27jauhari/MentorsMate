import React, { useState } from "react";
import styled from "styled-components";
import { db } from '../firebase'; // Ensure you have the Firebase configuration file
import { collection, addDoc } from 'firebase/firestore'; // Import necessary Firestore functions

const FeedbackForm = () => {
  const [mentorName, setMentorName] = useState({ firstName: '', lastName: '' });
  const [menteeName, setMenteeName] = useState({ firstName: '', lastName: '' });
  const [comments, setComments] = useState('');
  const [evaluation, setEvaluation] = useState({
    criteria1: null,
    criteria2: null,
    // Add more criteria if needed
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith('mentor')) {
      setMentorName({ ...mentorName, [name.split('_')[1]]: value });
    } else if (name.startsWith('mentee')) {
      setMenteeName({ ...menteeName, [name.split('_')[1]]: value });
    } else if (name === 'comments') {
      setComments(value);
    } else {
      setEvaluation({ ...evaluation, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "feedback"), {
        mentorName: mentorName,
        menteeName: menteeName,
        evaluation: evaluation,
        comments: comments,
      });
      alert("Feedback submitted successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
    }

    // Reset form after submission
    setMentorName({ firstName: '', lastName: '' });
    setMenteeName({ firstName: '', lastName: '' });
    setComments('');
    setEvaluation({
      criteria1: null,
      criteria2: null,
      // Reset other criteria if needed
    });
  };

  return (
    <Container>
      <Header />
      <Form onSubmit={handleSubmit}>
        <SectionTitle>Feedback Form</SectionTitle>
        <SubTitle>Please evaluate the mentor using the scale below:</SubTitle>

        <Label>Name of Mentor</Label>
        <NameInputWrapper>
          <Input type="text" name="mentor_firstName" value={mentorName.firstName} onChange={handleInputChange} placeholder="First Name" />
          <Input type="text" name="mentor_lastName" value={mentorName.lastName} onChange={handleInputChange} placeholder="Last Name" />
        </NameInputWrapper>

        <SectionTitle>Evaluation</SectionTitle>
        <Table>
          <thead>
            <tr>
              <th>Criteria</th>
              <th>Strongly Disagree</th>
              <th>Disagree</th>
              <th>Neutral</th>
              <th>Agree</th>
              <th>Strongly Agree</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>My mentor has been readily available and reachable.</td>
              {Array.from({ length: 5 }, (_, index) => (
                <td key={index}>
                  <Radio type="radio" name="criteria1" value={index} checked={evaluation.criteria1 === index} onChange={handleInputChange} />
                </td>
              ))}
            </tr>
            <tr>
              <td>My mentor helped me deal with stress and well-being.</td>
              {Array.from({ length: 5 }, (_, index) => (
                <td key={index}>
                  <Radio type="radio" name="criteria2" value={index} checked={evaluation.criteria2 === index} onChange={handleInputChange} />
                </td>
              ))}
            </tr>
            <tr>
              <td>My mentor helped me deal with stress and well-being.</td>
              {Array.from({ length: 5 }, (_, index) => (
                <td key={index}>
                  <Radio type="radio" name="criteria2" value={index} checked={evaluation.criteria2 === index} onChange={handleInputChange} />
                </td>
              ))}
            </tr>
            <tr>
              <td>My mentor helped me deal with stress and well-being.</td>
              {Array.from({ length: 5 }, (_, index) => (
                <td key={index}>
                  <Radio type="radio" name="criteria2" value={index} checked={evaluation.criteria2 === index} onChange={handleInputChange} />
                </td>
              ))}
            </tr>
            <tr>
              <td>My mentor helped me deal with stress and well-being.</td>
              {Array.from({ length: 5 }, (_, index) => (
                <td key={index}>
                  <Radio type="radio" name="criteria2" value={index} checked={evaluation.criteria2 === index} onChange={handleInputChange} />
                </td>
              ))}
            </tr>
            {/* Add more criteria rows as needed */}
          </tbody>
        </Table>

        <Label>Comments</Label>
        <FeedbackTextarea name="comments" value={comments} onChange={handleInputChange} placeholder="Add any comments here..." />

        <Label>Name of Mentee</Label>
        <NameInputWrapper>
          <Input type="text" name="mentee_firstName" value={menteeName.firstName} onChange={handleInputChange} placeholder="First Name" />
          <Input type="text" name="mentee_lastName" value={menteeName.lastName} onChange={handleInputChange} placeholder="Last Name" />
        </NameInputWrapper>

        <Label>Signature</Label>
        <SignatureBox>
          <SignatureImage src="signature.png" alt="Signature" />{" "}
          {/* Add a signature image */}
        </SignatureBox>

        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </Container>
  );
};

export default FeedbackForm;

// Styled Components (unchanged)
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #f7f7f7;
  min-height: 100vh;
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: #e6f4ff;
`;

const Form = styled.form`
  width: 100%;
  max-width: 800px;
  background-color: #fff;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

const SubTitle = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  margin-top: 20px;
`;

const NameInputWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  font-size: 16px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th,
  td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
  }

  th {
    background-color: #f0f0f0;
    font-weight: bold;
  }
`;

const Radio = styled.input`
  margin: 0 auto;
  display: block;
`;

const FeedbackTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 10px;
  font-size: 16px;
`;

const SignatureBox = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignatureImage = styled.img`
  max-height: 80px;
`;

const SubmitButton = styled.button`
  background-color: #28a745;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  margin-top: 20px;
  cursor: pointer;
`;
