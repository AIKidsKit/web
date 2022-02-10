//import {sortBy} from '@site/src/utils/jsUtils';

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export type TagType =
  | 'favorite'
  | 'parent'
  | 'kid'
  | 'teacher'
  | 'lobe'
  | 'scratch'
  | 'makecode';

export type User = {
  title: string;
  description: string;
  website: string;
  source: string | null;
  tags: TagType[];
};

// LIST OF AVAILABLE TAGS
export const Tags: Record<TagType, Tag> = {
  // DO NOT USE THIS TAG: we choose sites to add to favorites
  favorite: {
    label: 'Favorite',
    description:
      'Our favorite resources!',
    color: '#D60079',
  },

  // For open-source sites, a link to the source code is required
  parent: {
    label: 'Parent',
    description: 'Resources for parents!',
    color: '#ff7029',
  },

  kid: {
    label: 'Kids',
    description:
      'Resources for kids!',
    color: '#4D00D2',
  },

  teacher: {
    label: 'Teachers',
    description:
      'Resources for teachers!',
    color: '#FFC629',
  },

  lobe: {
    label: 'Lobe AI',
    description:
      'Resources for using Lobe AI.',
    color: '#1282A2',
  },
  scratch: {
    label: 'Scratch',
    description:
      'Resources for getting started with Scratch!',
    color: '#F8AC3D',
  },

  makecode: {
    label: 'MakeCode',
    description: 'Resource for getting started with MakeCode!',
    color: '#ac2790', 
  },
};


const Users: User[] = [
  {
    title: 'Aide Jeune',
    description:
      'French Discord server that helps young people who have been bullied or feel bad about themselves',
    preview: require('./showcase/aide_jeune.png'),
    website: 'https://aidejeune.fr',
    source: 'https://github.com/AideJeune',
    tags: ['opensource'],
  },
  {
    title: 'AgileTs',
    description: 'Global State and Logic Framework for reactive Applications',
    preview: require('./showcase/agilets.png'),
    website: 'https://agile-ts.org/',
    source: 'https://github.com/agile-ts/documentation',
    tags: ['opensource', 'design'],
  },
  {
    title: 'AI-Speaker',
    description: 'Local, reliable, fast and private Audio and IoT gate.',
    preview: require('./showcase/aispeaker.png'),
    website: 'https://ai-speaker.com/',
    source: 'https://github.com/sviete/AIS-WWW',
    tags: ['opensource'],
  },
  {
    title: 'Algolia Docsearch',
    description:
      'The best search experience for docs, integrates in minutes, for free',
    preview: require('./showcase/algolia.png'),
    website: 'https://docsearch.algolia.com/',
    source: 'https://github.com/algolia/docsearch-website',
    tags: ['favorite', 'opensource', 'product'],
  },
  // TODO site unavailable on 12/31/2021
  {
    title: 'Amphora Data',
    description: 'Connecting the world’s real-time information',
    preview: require('./showcase/amphora.png'),
    website: 'https://www.amphoradata.com/',
    source: 'https://github.com/amphoradata/amphoradata.github.io',
    tags: ['opensource', 'product'],
  },
  {
    title: 'Apache APISIX',
    description:
      'A Dynamic, Real-Time, High-Performance Cloud-Native API Gateway',
    preview: require('./showcase/apache-apisix.png'),
    website: 'https://apisix.apache.org/',
    source: 'https://github.com/apache/apisix-website',
    tags: ['opensource', 'i18n', 'large'],
  },
  {
    title: 'Apex FP',
    description: 'Functional programming library for Salesforce Apex',
    preview: require('./showcase/apexfp.png'),
    website: 'https://www.apexfp.org',
    source: 'https://github.com/ipavlic/apex-fp/tree/master/website',
    tags: ['opensource'],
  },
  {
    title: 'Astronomer',
    description:
      'Enterprise-grade framework for Apache Airflow. Production-ready Airflow environments with just a few clicks',
    preview: require('./showcase/astronomer.png'),
    website: 'https://docs.astronomer.io',
    source: 'https://github.com/astronomer/docs',
    tags: ['product', 'versioning', 'opensource'],
  },
  {
    title: 'AttoBot',
    description:
      'A multi-purpose Discord bot with many features and API integrations that will enhance your Discord experience.',
    preview: require('./showcase/attobot.png'),
    website: 'https://attobot.xyz',
    source: 'https://github.com/attobot-discord/website',
    tags: ['opensource'],
  },
];

export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = <Resources></Resources>;
  // Sort by site name
  result = sortBy(result, resource) => resource.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (resource) => !resource.tags.includes('favorite'));
  return result;
}

export const sortedResources = sortResources();
