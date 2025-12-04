import next from 'eslint-config-next';

export default [
  ...next,
  {
    rules: {
      'react-hooks/refs': 'off',
      'react-hooks/purity': 'off',
      'react/no-unescaped-entities': 'off',
    },
  },
  {
    files: ['components/emoji-accessibility.tsx'],
    rules: {
      'react-hooks/set-state-in-effect': 'off',
    },
  },
];
