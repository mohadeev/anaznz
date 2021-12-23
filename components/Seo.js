import React from "react";

const Seo = ({ SeoTile, DescMata }) => {
  return (
    <div>
      <head>
        <title>{SeoTile}</title>
        <meta name="description" content={DescMata} />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <link rel="canonical" href="https://www.moroccotoursagency.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Best Morocco Tours (2021), Local Travel Agency, All-in Tours"
        />
        <meta
          property="og:description"
          content="Morocco Tours are organized tours and excursions in Morocco, characterized by being previously planned by Morocco Tours Agency local professionals. We have"
        />
        <meta property="og:url" content="https://www.moroccotoursagency.com/" />
        <meta property="og:site_name" content="Morocco Tours Agency" />
        <meta property="og:updated_time" content="2021-09-06T12:58:59+00:00" />
        <meta
          property="og:image"
          content="https://cdn.statically.io/img/www.moroccotoursagency.com/f=auto/wp-content/uploads/2021/02/Morocco-Tours.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://cdn.statically.io/img/www.moroccotoursagency.com/f=auto/wp-content/uploads/2021/02/Morocco-Tours.jpg"
        />
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="800" />
        <meta property="og:image:alt" content="Morocco Tours" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best Morocco Tours (2021), Local Travel Agency, All-in Tours"
        />
        <meta
          name="twitter:description"
          content="Morocco Tours are organized tours and excursions in Morocco, characterized by being previously planned by Morocco Tours Agency local professionals. We have"
        />
        <meta name="twitter:site" content="@morocco_agency" />
        <meta name="twitter:creator" content="@morocco_agency" />
        <meta
          name="twitter:image"
          content="https://cdn.statically.io/img/www.moroccotoursagency.com/f=auto/wp-content/uploads/2021/02/Morocco-Tours.jpg"
        />
        <meta name="yandex-verification" content="3135145199441ac9" />
        <meta
          name="p:domain_verify"
          content="pinterest-site-verification=2f5356b23a8c526070d962fd2993d662"
        />
      </head>
    </div>
  );
};

export default Seo;
