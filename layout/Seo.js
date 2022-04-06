import React, { useEffect, useState } from "react";
import Head from "next/head";

const Seo = ({ SeoTitle, DescMeta, ImageSeo, SeaKeyWord }) => {
  const [HostName, setHostName] = useState("");
  useEffect(() => {
    setHostName(window.location.href);
  }, []);

  return (
    <Head>
      <title>{SeoTitle} || Ur Excursions</title>
      <meta name="description" content={DescMeta} />
      <meta
        name="Keywords"
        content={SeaKeyWord ? SeaKeyWord + " " + SeoTitle : SeoTitle}
      />
      <meta
        name="robots"
        content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
      />
      <link rel="canonical" href={HostName} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Best Morocco Tours (2021), Local Travel Agency, All-in Tours"
      />
      <meta property="og:description" content={DescMeta} />
      <meta property="og:url" content="https://www.moroccotoursagency.com/" />
      <meta property="og:site_name" content="Morocco Tours Agency" />
      <meta property="og:updated_time" content="2021-09-06T12:58:59+00:00" />
      <meta property="og:image" content={ImageSeo} />
      <meta property="og:image:secure_url" content={ImageSeo} />
      <meta property="og:image:width" content="1600" />
      <meta property="og:image:height" content="800" />
      <meta property="og:image:alt" content="Morocco Tours" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Best Morocco Tours (2021), Local Travel Agency, All-in Tours"
      />
      <meta name="twitter:description" content={DescMeta} />
      <meta name="twitter:site" content={`@${SeoTitle}`} />
      <meta name="twitter:creator" content={`@${SeoTitle}`} />
      <meta name="twitter:image" content={ImageSeo} />
      <meta name="yandex-verification" content="3135145199441ac9" />
      <meta
        name="p:domain_verify"
        content="pinterest-site-verification=2f5356b23a8c526070d962fd2993d662"
      />
    </Head>
  );
};

export default Seo;
