import React from 'react';
import { Helmet } from 'react-helmet';

const Metadata = () => {
  return (
    <div>
      <Helmet>
        {/* Basic meta tags */}
        <title>Your Page Title</title>
        <meta name="description" content="Your page description" />

        {/* Open Graph Protocol (OGP) meta tags for sharing on social media */}
        <meta property="og:title" content="Your Open Graph Title" />
        <meta property="og:description" content="Your Open Graph Description" />
        <meta property="og:image" content="URL to the image for sharing" />
        <meta property="og:url" content="URL of the page" />
        <meta property="og:type" content="website" />

        {/* Twitter meta tags for sharing on Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Twitter Title" />
        <meta name="twitter:description" content="Your Twitter Description" />
        <meta name="twitter:image" content="URL to the image for sharing on Twitter" />
      </Helmet>

      {/* Your component content */}
    </div>
  );
};

export default Metadata;