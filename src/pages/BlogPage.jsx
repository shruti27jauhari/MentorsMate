import React from 'react';
import styled from 'styled-components';

const BlogPage = () => {
  return (
    <Container>
    

      <Content>
        <Sidebar>
          <TopBlogs>
            <h2>Top Blogs</h2>
            <BlogItem>
              <Date>29 Feb 2024, Thursday</Date>
              <Title>How are AgriTech Startups Revolutionising Farming?</Title>
              <Author>By: Dr Anu Kadyan</Author>
            </BlogItem>
            <BlogItem>
              <Date>11 Jan 2024, Thursday</Date>
              <Title>Growth through Learning with StartupShala</Title>
              <Author>By: Startup Wardha</Author>
            </BlogItem>
          </TopBlogs>
        </Sidebar>

        <MainContent>
          <BlogPost>
            <BlogImage src="/agri.jpeg" alt="AgriTech Startups" />
            <PostInfo>
              <PostDate>29 Feb 2024, Thursday</PostDate>
              <PostTitle>How are AgriTech Startups Revolutionising Farming Practices?</PostTitle>
              <PostDescription>
                Enhancing efficiency, sustainability, and profitability in agriculture...
              </PostDescription>
            </PostInfo>
          </BlogPost>

          <BlogPost>
            <BlogImage src="/startup.jpeg" alt="Growth through Learning" />
            <PostInfo>
              <PostDate>11 Jan 2024, Thursday</PostDate>
              <PostTitle>Growth through Learning with StartupShala</PostTitle>
              <PostDescription>
                Learn the valuable lessons from StartupShala and how they empower startups...
              </PostDescription>
            </PostInfo>
          </BlogPost>
          <BlogPost>
            <BlogImage src="/agri.jpeg" alt="AgriTech Startups" />
            <PostInfo>
              <PostDate>29 Feb 2024, Thursday</PostDate>
              <PostTitle>How are AgriTech Startups Revolutionising Farming Practices?</PostTitle>
              <PostDescription>
                Enhancing efficiency, sustainability, and profitability in agriculture...
              </PostDescription>
            </PostInfo>
          </BlogPost>

          <BlogPost>
            <BlogImage src="/startup.jpeg" alt="Growth through Learning" />
            <PostInfo>
              <PostDate>11 Jan 2024, Thursday</PostDate>
              <PostTitle>Growth through Learning with StartupShala</PostTitle>
              <PostDescription>
                Learn the valuable lessons from StartupShala and how they empower startups...
              </PostDescription>
            </PostInfo>
          </BlogPost>

          <LoadMoreButton>LOAD MORE</LoadMoreButton>
        </MainContent>
      </Content>
    </Container>
  );
};

export default BlogPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  background-color: #000;
  color: #fff;
  width: 100%;
`;

const Logo = styled.h1`
  font-size: 24px;
  color: #fff;

  span {
    color: #f1c40f;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

const Content = styled.div`
  display: flex;
  max-width: 1200px;
  padding: 40px;
  gap: 20px;
`;

const Sidebar = styled.div`
  flex: 1;
`;

const TopBlogs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  border: grey 1px solid;
  padding: 10px;
`;

const BlogItem = styled.div`
  padding: 10px 0;
`;

const Date = styled.p`
  font-size: 14px;
  color: #888;
`;

const Title = styled.h3`
  font-size: 18px;
`;

const Author = styled.p`
  font-size: 14px;
`;

const MainContent = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
`;

const BlogPost = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const BlogImage = styled.img`
  width: 150px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 20px;
`;

const PostInfo = styled.div`
  flex: 1;
`;

const PostDate = styled.p`
  font-size: 14px;
  color: #888;
`;

const PostTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const PostDescription = styled.p`
  font-size: 16px;
`;

const LoadMoreButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  align-self: center;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;


