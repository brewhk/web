sitemaps.config('rootUrl', 'http://www.brew.com.hk/');

sitemaps.add('/sitemap.xml', function() {
  // required: page
  // optional: lastmod, changefreq, priority, xhtmlLinks, images, videos
  return [
    {
      page: '/',
      lastmod: new Date(),
      changefreq: 'daily',
      priority: 1
    },
    {
      page: '/contact-us',
      lastmod: new Date(),
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      page: '/projects',
      lastmod: new Date(),
      changefreq: 'weekly',
      priority: 0.4
    },
    {
      page: '/projects/skeduo',
      lastmod: new Date(),
      changefreq: 'weekly',
      priority: 0.1
    },
    {
      page: '/projects/takeoff',
      lastmod: new Date(),
      changefreq: 'weekly',
      priority: 0.1
    },
    {
      page: '/projects/bebello',
      lastmod: new Date(),
      changefreq: 'weekly',
      priority: 0.1
    },
    {
      page: '/projects/techni-photo',
      lastmod: new Date(),
      changefreq: 'weekly',
      priority: 0.1
    },
    {
      page: '/process',
      lastmod: new Date(),
      changefreq: 'weekly',
      priority: 0.5
    },
    {
      page: '/solutions',
      lastmod: new Date(),
      changefreq: 'weekly',
      priority: 0.6
    },
    {
      page: '/services',
      lastmod: new Date(),
      changefreq: 'weekly',
      priority: 0.5
    },
  ];
});