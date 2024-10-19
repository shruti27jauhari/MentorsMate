import React, { useState } from "react";
import styled from "styled-components";
import { db } from "../firebase"; // Ensure you have the Firebase configuration file
import { collection, addDoc } from "firebase/firestore"; // Import necessary Firestore functions

const FeedbackForm = () => {
  const [mentorName, setMentorName] = useState({ firstName: "", lastName: "" });
  const [menteeName, setMenteeName] = useState({ firstName: "", lastName: "" });
  const [comments, setComments] = useState("");
  const [evaluation, setEvaluation] = useState({
    criteria1: null,
    criteria2: null,
    criteria3: null,
    criteria4: null,
    criteria5: null,
  });
  const [signatureImage, setSignatureImage] = useState(null); // State for signature image

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("mentor")) {
      setMentorName({ ...mentorName, [name.split("_")[1]]: value });
    } else if (name.startsWith("mentee")) {
      setMenteeName({ ...menteeName, [name.split("_")[1]]: value });
    } else if (name === "comments") {
      setComments(value);
    } else {
      setEvaluation({ ...evaluation, [name]: parseInt(value) });
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSignatureImage(reader.result); // Set the image for display
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "feedback"), {
        mentorName,
        menteeName,
        evaluation,
        comments,
        signatureImage, // Include the signature image in the submission if needed
      });
      alert("Feedback submitted successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
    }

    // Reset form after submission
    setMentorName({ firstName: "", lastName: "" });
    setMenteeName({ firstName: "", lastName: "" });
    setComments("");
    setEvaluation({
      criteria1: null,
      criteria2: null,
      criteria3: null,
      criteria4: null,
      criteria5: null,
    });
    setSignatureImage(null); // Reset the signature image
  };

  return (
    <Container>
      <Header />
      <Form onSubmit={handleSubmit}>
        <SectionTitle>Feedback Form</SectionTitle>
        <SubTitle>Please evaluate the mentor using the scale below:</SubTitle>

        <Label>Name of Mentor</Label>
        <NameInputWrapper>
          <Input
            type="text"
            name="mentor_firstName"
            value={mentorName.firstName}
            onChange={handleInputChange}
            placeholder="First Name"
          />
          <Input
            type="text"
            name="mentor_lastName"
            value={mentorName.lastName}
            onChange={handleInputChange}
            placeholder="Last Name"
          />
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
    <tr>
      <th colSpan="6">Please rate the following statements based on your experience with your mentor:</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>My mentor has been readily available and reachable.</td>
      {Array.from({ length: 5 }, (_, index) => (
        <td key={index}>
          <Radio
            type="radio"
            name="criteria1"
            value={index}
            checked={evaluation.criteria1 === index}
            onChange={handleInputChange}
          />
        </td>
      ))}
    </tr>
    <tr>
      <td>My mentor helped me deal with stress and well-being.</td>
      {Array.from({ length: 5 }, (_, index) => (
        <td key={index}>
          <Radio
            type="radio"
            name="criteria2"
            value={index}
            checked={evaluation.criteria2 === index}
            onChange={handleInputChange}
          />
        </td>
      ))}
    </tr>
    <tr>
      <td>My mentor provided valuable feedback on my work.</td>
      {Array.from({ length: 5 }, (_, index) => (
        <td key={index}>
          <Radio
            type="radio"
            name="criteria3"
            value={index}
            checked={evaluation.criteria3 === index}
            onChange={handleInputChange}
          />
        </td>
      ))}
    </tr>
    <tr>
      <td>My mentor encouraged my personal growth.</td>
      {Array.from({ length: 5 }, (_, index) => (
        <td key={index}>
          <Radio
            type="radio"
            name="criteria4"
            value={index}
            checked={evaluation.criteria4 === index}
            onChange={handleInputChange}
          />
        </td>
      ))}
    </tr>
    <tr>
      <td>Overall, I am satisfied with my mentoring experience.</td>
      {Array.from({ length: 5 }, (_, index) => (
        <td key={index}>
          <Radio
            type="radio"
            name="criteria5"
            value={index}
            checked={evaluation.criteria5 === index}
            onChange={handleInputChange}
          />
        </td>
      ))}
    </tr>
    {/* Add more criteria rows as needed */}
  </tbody>
</Table>

        <Label>Comments</Label>
        <FeedbackTextarea
          name="comments"
          value={comments}
          onChange={handleInputChange}
          placeholder="Add any comments here..."
        />

        <Label>Name of Mentee</Label>
        <NameInputWrapper>
          <Input
            type="text"
            name="mentee_firstName"
            value={menteeName.firstName}
            onChange={handleInputChange}
            placeholder="First Name"
          />
          <Input
            type="text"
            name="mentee_lastName"
            value={menteeName.lastName}
            onChange={handleInputChange}
            placeholder="Last Name"
          />
        </NameInputWrapper>

        <Label>Signature</Label>
        <SignatureBox>
          <input type="file" accept="image/*" onChange={handleFileChange} />
          <SignatureImage src={signatureImage || "signature.png"} alt="Signature" />
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
  margin-bottom: 20px;
  padding: 10px;
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
  display: flex;
  align-items: center;
`;

const SubmitButton = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

const SignatureImage = styled.img`
  width: 200px; // Adjust the size as needed
  height: auto;
  margin-top: 10px; // Add spacing above the image
`;