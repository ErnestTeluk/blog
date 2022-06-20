import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

import {
  SectionWrapper,
  AvatarWrapper,
  Title,
  SubTitle,
} from './PersonalCard.styled';

interface ImageProps {
  file: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
}

function PersonalCard() {
  const { file } = useStaticQuery<ImageProps>(query);

  return (
    <SectionWrapper>
      <AvatarWrapper>
        <GatsbyImage
          image={file.childImageSharp.gatsbyImageData}
          alt="avatar"
        />
      </AvatarWrapper>
      <div>
        <Title>Ernest Teluk</Title>
        <SubTitle>Personal Blog</SubTitle>
      </div>
    </SectionWrapper>
  );
}

const query = graphql`
  query getAvatar {
    file(relativePath: { eq: "avatar.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FIXED
          webpOptions: { quality: 70 }
          height: 64
          width: 64
        )
      }
    }
  }
`;

export default PersonalCard;
