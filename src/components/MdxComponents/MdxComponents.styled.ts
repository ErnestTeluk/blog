import styled from 'styled-components';
import { Link } from 'gatsby';
import { Hashtag } from '@styled-icons/fa-solid/Hashtag';

export const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.textTitle};
  font-size: ${({ theme }) => theme.fontSize.xxl};
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textLink};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-decoration: none;
`;

export const StyledIcon = styled(Hashtag)`
  color: ${({ theme }) => theme.colors.textLink};
  width: ${({ theme }) => theme.fontSize.xl};
  margin-left: 5px;
  opacity: 0;
  visibility: hidden;
`;

export const H2 = styled.h1`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textTitle};
  font-size: ${({ theme }) => theme.fontSize.xl};

  &:hover {
    ${StyledIcon} {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const H3 = styled.h1`
  color: ${({ theme }) => theme.colors.textTitle};
  font-size: ${({ theme }) => theme.fontSize.l};
`;

export const P = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.m};
`;
export const A = styled(Link)`
  color: ${({ theme }) => theme.colors.textLink};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
