import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";

import Layout from "../components/layout";

export default class RootIndex extends React.Component {
  render() {
    const metaDescription = `Gatsby + Contentful`;
    const structuredData = {
      "@context": "http://schema.org",
      "@type": "Organization",
      name: "Gatsby-Contentful",
      url: "https://www.example.com/",
      address: "123 3rd st",
      sameAs: ["https://www.facebook.com/gatsby-contentful-starter"]
    };

    return (
      <Layout description={metaDescription}>
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        </Helmet>
        <hr />
        <h1>Gatsby Contentful Starter</h1>
        <Link to="/blog">Blog</Link>
      </Layout>
    );
  }
}
