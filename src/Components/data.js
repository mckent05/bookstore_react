import { v4 as uuid } from 'uuid';

const generateCompletion = () => (Math.floor(Math.random() * 100));
const generateChapter = () => (Math.floor(Math.random() * 20));
const genres = ['science', 'drama', 'action', 'thriller', 'love', 'horror'];
const data = [
  {
    title: 'Hunger',
    chapter: generateChapter(),
    progress: generateCompletion(),
    author: 'wande',
    category: 'science',
    id: uuid(),
  },
  {
    title: 'money heist',
    chapter: generateChapter(),
    progress: generateCompletion(),
    author: 'rtrtr',
    category: 'history',
    id: uuid(),
  },
];

export {
  data, generateCompletion, genres, generateChapter,
};
