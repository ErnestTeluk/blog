import styled from 'styled-components';
import { Coffee } from '@styled-icons/fa-solid/Coffee';
import { LunchDining } from '@styled-icons/material/LunchDining';

export const CoffeIcon = styled(Coffee)`
  width: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.text};
`;

export const BurgerIcon = styled(LunchDining)`
  width: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.text};
`;

export const IconsWrapper = styled.div`
  display: inline-block;
  margin-left: 5px;
`;
