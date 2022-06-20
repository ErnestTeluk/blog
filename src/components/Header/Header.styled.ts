import styled from 'styled-components';
import { Link } from 'gatsby';
import Toggle from 'react-toggle';

export const StyledHeader = styled.header`
  width: 100%;
  height: 42px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 480px) {
    flex-flow: column;
    align-items: center;
    justify-content: center;
    height: auto;
  }
`;

export const StyledTitleLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textLink};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

export const StyledNav = styled.nav`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 140px;
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textLink};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  cursor: pointer;
  text-decoration: none;
  transition: text-decoration 0.3s ease-in-out;

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledToggle = styled(Toggle)`
  .react-toggle-track {
    background-color: #000 !important;
    color: #fff !important;
  }
  .react-toggle-track-check {
    width: 14px !important;
    height: 14px !important;
  }
  .react-toggle-track-x {
    width: 14px !important;
    height: 14px !important;
  }
  .react-toggle-thumb {
    box-shadow: 0 0 2px 3px ${({ theme }) => theme.colors.textLink} !important;
  }
`;
