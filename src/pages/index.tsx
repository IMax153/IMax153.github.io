import React from 'react';

import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { Layout } from '../components/Layout';
import { Projects } from '../components/Projects';

const IndexPage = () => (
  <Layout title="Home">
    <Hero />
    <Projects />
    <Footer />
  </Layout>
);

export default IndexPage;
