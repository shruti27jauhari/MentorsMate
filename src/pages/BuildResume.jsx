import React, { useState } from "react";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";
import jsPDF from "jspdf";

const PageWrapper = styled.div`
  display: flex;
  overflow: hidden;
`;

const Sidebar = styled.div`
  width: 240px;
  background-color: #e6f0ff;
  padding: 20px;
  position: fixed;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;

const VerticalLine = styled.div`
  position: absolute;
  left: 100px;
  top: 0;
  bottom: 0;
  background-color: #ccc;
  z-index: 0;
`;

const SidebarItem = styled.div`
  margin-bottom: 20px;
  font-size: 18px;
  color: #4267b2;
  cursor: pointer;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
`;

const CheckmarkIcon = styled(FaCheckCircle)`
  color: #28a745;
  margin-left: 10px;
`;

const MainContent = styled.div`
  padding: 20px;
  padding-left: 60px;
  padding-right: 60px;
  overflow-y: auto;
  height: 100vh;
  width: 800px;
`;

const FormSection = styled.div`
  margin-bottom: 20px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  min-height: 100px;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
  display: block;
`;

const SkillList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CheckBox = styled.input`
  margin-right: 10px;
`;

const TemplatePreview = styled.div`
  width: 280px;
  background-color: #f4f6f9;
  padding: 20px;
  position: fixed;
  right: 0;
  margin: 10px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
`;

const BuildResume = () => {
  // State for resume details
  const [resumeData, setResumeData] = useState({
    firstName: "",
    lastName: "",
    profession: "",
    phone: "",
    email: "",
    jobTitle: "",
    employer: "",
    startDate: "",
    endDate: "",
    degree: "",
    school: "",
    graduationYear: "",
    skills: [],
    summary: "",
  });

  // State to manage form section completion
  const [completion, setCompletion] = useState({
    personalDetails: false,
    workHistory: false,
    education: false,
    skills: false,
    summary: false,
  });

  const handleSectionComplete = (section) => {
    setCompletion((prevCompletion) => ({
      ...prevCompletion,
      [section]: true,
    }));
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle skills checkbox
  const handleSkillChange = (e) => {
    const { value } = e.target;
    setResumeData((prevData) => {
      const skills = prevData.skills.includes(value)
        ? prevData.skills.filter((skill) => skill !== value)
        : [...prevData.skills, value];
      return { ...prevData, skills };
    });
  };

  // Generate PDF
  const generatePDF = () => {
    const doc = new jsPDF();

    // Add content to PDF
    doc.setFontSize(22);
    doc.text(
      `Resume of ${resumeData.firstName} ${resumeData.lastName}`,
      20,
      30
    );
    doc.setFontSize(16);
    doc.text(`Profession: ${resumeData.profession}`, 20, 50);
    doc.text(`Phone: ${resumeData.phone}`, 20, 60);
    doc.text(`Email: ${resumeData.email}`, 20, 70);

    doc.setFontSize(20);
    doc.text("Work History", 20, 90);
    doc.setFontSize(16);
    doc.text(`Job Title: ${resumeData.jobTitle}`, 20, 110);
    doc.text(`Employer: ${resumeData.employer}`, 20, 120);
    doc.text(`Start Date: ${resumeData.startDate}`, 20, 130);
    doc.text(`End Date: ${resumeData.endDate}`, 20, 140);

    doc.setFontSize(20);
    doc.text("Education", 20, 160);
    doc.setFontSize(16);
    doc.text(`Degree: ${resumeData.degree}`, 20, 180);
    doc.text(`School: ${resumeData.school}`, 20, 190);
    doc.text(`Graduation Year: ${resumeData.graduationYear}`, 20, 200);

    doc.setFontSize(20);
    doc.text("Skills", 20, 220);
    doc.setFontSize(16);
    doc.text(resumeData.skills.join(", "), 20, 240);

    doc.setFontSize(20);
    doc.text("Summary", 20, 260);
    doc.setFontSize(16);
    doc.text(resumeData.summary, 20, 280);

    // Save the PDF
    doc.save(`${resumeData.firstName}_${resumeData.lastName}_Resume.pdf`);
  };

  return (
    <PageWrapper>
      <Sidebar>
        <VerticalLine />
        <h2>MentorMate</h2>
        <SidebarItem>
          Personal Details
          {completion.personalDetails && <CheckmarkIcon />}
        </SidebarItem>
        <SidebarItem>
          Work History
          {completion.workHistory && <CheckmarkIcon />}
        </SidebarItem>
        <SidebarItem>
          Education
          {completion.education && <CheckmarkIcon />}
        </SidebarItem>
        <SidebarItem>
          Skills
          {completion.skills && <CheckmarkIcon />}
        </SidebarItem>
        <SidebarItem>
          Summary
          {completion.summary && <CheckmarkIcon />}
        </SidebarItem>
      </Sidebar>

      <MainContent>
        <h2>Resume Builder</h2>

        <FormSection>
          <h3>Personal Details</h3>
          <Label>First Name</Label>
          <InputField
            name="firstName"
            type="text"
            placeholder="First Name"
            onChange={handleChange}
          />
          <Label>Last Name</Label>
          <InputField
            name="lastName"
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
          />
          <Label>Profession</Label>
          <InputField
            name="profession"
            type="text"
            placeholder="Profession"
            onChange={handleChange}
          />
          <Label>Phone</Label>
          <InputField
            name="phone"
            type="text"
            placeholder="Phone"
            onChange={handleChange}
          />
          <Label>Email</Label>
          <InputField
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            onBlur={() => handleSectionComplete("personalDetails")}
          />
        </FormSection>

        <FormSection>
          <h3>Work History</h3>
          <Label>Job Title</Label>
          <InputField
            name="jobTitle"
            type="text"
            placeholder="Job Title"
            onChange={handleChange}
          />
          <Label>Employer</Label>
          <InputField
            name="employer"
            type="text"
            placeholder="Employer"
            onChange={handleChange}
          />
          <Label>Start Date</Label>
          <InputField
            name="startDate"
            type="text"
            placeholder="Start Date"
            onChange={handleChange}
          />
          <Label>End Date</Label>
          <InputField
            name="endDate"
            type="text"
            placeholder="End Date"
            onChange={handleChange}
            onBlur={() => handleSectionComplete("workHistory")}
          />
        </FormSection>

        <FormSection>
          <h3>Education</h3>
          <Label>Degree</Label>
          <InputField
            name="degree"
            type="text"
            placeholder="Degree"
            onChange={handleChange}
          />
          <Label>School</Label>
          <InputField
            name="school"
            type="text"
            placeholder="School"
            onChange={handleChange}
          />
          <Label>Graduation Year</Label>
          <InputField
            name="graduationYear"
            type="text"
            placeholder="Graduation Year"
            onChange={handleChange}
            onBlur={() => handleSectionComplete("education")}
          />
        </FormSection>

        <FormSection>
          <h3>Skills</h3>
          <SkillList>
            <SkillItem>
              <CheckBox
                type="checkbox"
                value="JavaScript"
                onChange={handleSkillChange}
              />
              JavaScript
            </SkillItem>
            <SkillItem>
              <CheckBox
                type="checkbox"
                value="React"
                onChange={handleSkillChange}
              />
              React
            </SkillItem>
            <SkillItem>
              <CheckBox
                type="checkbox"
                value="CSS"
                onChange={handleSkillChange}
              />
              CSS
            </SkillItem>
            <SkillItem>
              <CheckBox
                type="checkbox"
                value="Node.js"
                onChange={handleSkillChange}
              />
              Node.js
            </SkillItem>
          </SkillList>
        </FormSection>

        <FormSection>
          <h3>Summary</h3>
          <TextArea
            name="summary"
            placeholder="Summary"
            onChange={handleChange}
            onBlur={() => handleSectionComplete("summary")}
          />
        </FormSection>

        <SubmitButton onClick={generatePDF}>Download Resume</SubmitButton>
      </MainContent>

      {/* Right Sidebar - Template Preview */}
      <TemplatePreview>
        <h3>Your Resume Preview</h3>
        <div>
          {/* Placeholder for resume template */}

          <div
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              height: "260px",
            }}
          >
            <img src="/template.jpeg" alt="" />
          </div>
        </div>
        <p>Change Template</p>
      </TemplatePreview>
    </PageWrapper>
  );
};

export default BuildResume;
