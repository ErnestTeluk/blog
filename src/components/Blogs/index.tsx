import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import {
  SectionWrapper, PostWrapper, Title, Text,
} from './Blogs.styled';
import TimeToRead from '../TimeToRead';

interface BlogsProps {
  allMdx: {
    nodes: {
      slug: string;
      frontmatter: {
        title: string;
        subtitle: string;
        date: string;
      };
      wordCount: {
        words: number;
      };
    }[];
  };
}

function Blogs() {
  const {
    allMdx: { nodes },
  } = useStaticQuery<BlogsProps>(query);

  return (
    <SectionWrapper>
      {nodes.map(
        ({
          slug,
          frontmatter: { title, subtitle, date },
          wordCount: { words },
        }) => (
          <PostWrapper key={title}>
            <header>
              <Title>
                <Link to={slug}>{title}</Link>
              </Title>
              <Text>{date}</Text>
              <TimeToRead words={words} />
            </header>
            <Text as="h3" isMargin>
              {subtitle}
            </Text>
          </PostWrapper>
        ),
      )}
    </SectionWrapper>
  );
}

const query = graphql`
  query getBlogs {
    allMdx {
      nodes {
        slug
        frontmatter {
          title
          subtitle
          date(formatString: "MMMM DD, YYYY")
        }
        wordCount {
          words
        }
      }
    }
  }
`;

export default Blogs;
