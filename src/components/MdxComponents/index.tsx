import React from 'react';
import slugify from 'slugify';
import { H2 as Header2, StyledLink, StyledIcon } from './MdxComponents.styled';

const createSlug = (text: string) => slugify(text, {
  replacement: '-',
  lower: true,
  trim: true,
});

export function H2({ children }: { children: string }) {
  return (
    <Header2 id={createSlug(children)}>
      <StyledLink to={`#${createSlug(children)}`}>
        {children}
        <StyledIcon />
      </StyledLink>
    </Header2>
  );
}
