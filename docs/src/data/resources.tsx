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

export type Resource = {
  title: string;
  description: string;
  preview: string;
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


const Data = [
  {
    id: 1,
    title: 'Machine Learning for Kids',
    description: 'Teach a computer to play a game!',
    img: 'img/resources/machinelearningforkids.png',
    website: 'https://machinelearningforkids.co.uk/',
    source: 'https://machinelearningforkids.co.uk/',
    tags: 'parent',
  },
  {
    id: 2,
    title: 'Classifying Lacemaking Techniques',
    description: 'Machine Learning for Artisans: Classifying Lacemaking Techniques.',
    img: 'img/resources/dev.to.png',
    website: 'https://dev.to/azure/machine-learning-for-artisans-classifying-lacemaking-techniques-1g87/',
    source: 'https://dev.to/azure/machine-learning-for-artisans-classifying-lacemaking-techniques-1g87/',
    tags: 'parent',
  },
  {
    id: 3,
    title: 'Scratch',
    description:
      'Scratch is the world’s largest coding community for children.',
    img: 'img/resources/scratch.png',
     website: 'https://scratch.mit.edu/about',
    source: 'https://scratch.mit.edu/about',
    tags: 'kid',
  },
  {
    id: 4,
    title: 'MakeCode Projects',
    description: 'Cool tutorials to get you started with your micro:bit!',
    img: 'img/resources/makecode.png',
    website: 'https://makecode.microbit.org/tutorials',
    source: 'https://makecode.microbit.org/tutorials',
    tags: 'kid',
  },
  {
    id: 5,
    title: 'DAILy Workshop',
    description:
      'The Daily-AI workshop, designed by MIT educators and experienced facilitators, features hands-on and computer-based activities.',
      img: 'img/resources/raise-mit.png',
      website: 'https://raise.mit.edu/daily/index.html',
    source: 'https://raise.mit.edu/daily/index.html',
    tags: 'teacher',
  },
  {
    id: 6,
    title: 'Scratch Tutorials!',
    description:
      'New to Scratch? Not sure how to do something? If you answered \'Yes\' to any of those questions, this studio is for you!',
      img: 'img/resources/scratch-tutorials.png',
      website: 'https://scratch.mit.edu/studios/1817151',
    source: 'https://scratch.mit.edu/studios/1817151',
    tags: 'kid',
  },
];

export default Data;


// export const TagList = Object.keys(Tags) as TagType[];
// function sortUsers() {
//   let result = <Resources></Resources>;
//   // Sort by site name
//   result = sortBy(result, resource); => resource.title.toLowerCase());
//   // Sort by favorite tag, favorites first
//   result = sortBy(result, (resource) => !resource.tags.includes('favorite'));
//   return result;
// }

// Source: https://github.com/facebook/docusaurus
export function sortBy<T>(
  array: T[],
  getter: (item: T) => string | number | boolean,
): T[] {
  const sortedArray = [...array];
  sortedArray.sort((a, b) =>
    // eslint-disable-next-line no-nested-ternary
    getter(a) > getter(b) ? 1 : getter(b) > getter(a) ? -1 : 0,
  );
  return sortedArray;
}


