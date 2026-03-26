import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.nietzschepath.com';

  const routes = [
    '',
    '/privacy-policy',
    '/terms-of-service',
    '/cookie-settings',
  ];

  const sitemapData: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.5,
    alternates: {
      languages: {
        'fr': `${baseUrl}${route}`,
        'en': `${baseUrl}/en${route}`,
        'zh': `${baseUrl}/zh${route}`,
      },
    },
  }));

  return sitemapData;
}