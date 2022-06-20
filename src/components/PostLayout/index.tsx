import React, { ReactNode } from 'react';
import { MDXProvider } from '@mdx-js/react';
import Layout from '../Layout';
import { H2 } from '../MdxComponents';
import {
  P, A, H1, H3,
} from '../MdxComponents/MdxComponents.styled';

function PostLayout({ children }: { children: ReactNode }) {
  const components = {
    h1: H1,
    h2: H2,
    h3: H3,
    p: P,
    a: A,
  };

  return (
    <Layout>
      <MDXProvider components={components}>{children}</MDXProvider>
    </Layout>
  );
}

export default PostLayout;
