import React from 'react';
import { CoffeIcon, BurgerIcon, IconsWrapper } from './TimeToRead.styled';

const getReadMinutes = (words: number) => Math.ceil(words / 260);

function Icons({ readMinutes }: { readMinutes: number }) {
  const count = readMinutes < 15 ? 5 : 15;
  const iconCount = Math.ceil(readMinutes / count);

  return (
    <IconsWrapper>
      {readMinutes < 15 ? (
        <>
          {[...Array(iconCount).keys()].map((number) => (
            <CoffeIcon key={number} />
          ))}
        </>
      ) : (
        <>
          {[...Array(iconCount).keys()].map((number) => (
            <BurgerIcon key={number} />
          ))}
        </>
      )}
    </IconsWrapper>
  );
}

function TimeToRead({ words }: { words: number }) {
  const readMinutes = getReadMinutes(words);

  return (
    <>
      <Icons readMinutes={readMinutes} />
      <span>
        {' '}
        {readMinutes}
        {' '}
        min read
      </span>
    </>
  );
}

export default TimeToRead;
