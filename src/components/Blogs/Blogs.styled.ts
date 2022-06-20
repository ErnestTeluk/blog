import styled from 'styled-components';

export const SectionWrapper = styled.main`
  width: 100%;
  height: auto;
  margin-top: 20px;
`;

export const PostWrapper = styled.article`
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  margin-bottom: 10px;
  a {
    font-size: ${({ theme }) => theme.fontSize.xl};
    color: ${({ theme }) => theme.colors.textTitle};
    text-decoration: none;
  }
`;

export const Text = styled.span<{ isMargin?: boolean }>`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.text};
  ${({ isMargin }) => isMargin && 'margin-top: 10px'};
`;
