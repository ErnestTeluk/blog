import React from 'react';
import Layout from '../components/Layout';
import PersonalCard from '../components/PersonalCard';
import Blogs from '../components/Blogs';

function IndexPage() {
  return (
    <Layout>
      <PersonalCard />
      <Blogs />
    </Layout>
  );
}

export default IndexPage;
