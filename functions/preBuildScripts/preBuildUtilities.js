/* eslint-disable no-process-env */
const fs = require('fs');

const prismic = require('@prismicio/client');
const prismicNext = require('@prismicio/next');

const config = require('../../slicemachine.config.json');

const repositoryName = process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT || config.repositoryName;

const routes = [
  {
    type: 'home',
    path: '/',
  },
  {
    type: 'landing_page',
    path: '/:uid',
  },
];

const createClient = (conf = {}) => {
  const client = prismic.createClient(repositoryName, {
    routes,
    fetchOptions:
      process.env.NODE_ENV === 'production'
        ? { next: { tags: ['prismic'] }, cache: 'force-cache' }
        : { next: { revalidate: 5 } },
    ...conf,
  });

  prismicNext.enableAutoPreviews({
    client,
    previewData: conf.previewData,
    req: conf.req,
  });

  return client;
};

module.exports.preBuildDevelopment = async () => {
  const client = createClient();
  const header = await client.getSingle('global_header');
  const footer = await client.getSingle('global_footer');
  const socialLinks = await client.getSingle('social_links');

  fs.writeFileSync('./data/preBuild/globalHeader.json', JSON.stringify(header.data));
  fs.writeFileSync('./data/preBuild/globalFooter.json', JSON.stringify(footer.data));
  fs.writeFileSync('./data/preBuild/socialLinks.json', JSON.stringify(socialLinks.data));
};

module.exports.preBuildProduction = async () => {
  const client = createClient();
  const header = await client.getSingle('global_header');
  const footer = await client.getSingle('global_footer');
  const socialLinks = await client.getSingle('social_links');

  fs.writeFileSync('./data/preBuild/globalHeader.json', JSON.stringify(header.data));
  fs.writeFileSync('./data/preBuild/globalFooter.json', JSON.stringify(footer.data));
  fs.writeFileSync('./data/preBuild/socialLinks.json', JSON.stringify(socialLinks.data));
};
