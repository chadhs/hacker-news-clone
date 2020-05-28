import React from 'react';
import { ThemeContext } from '../contexts/theme';
import queryString from 'query-string';

export const Comments = ({ location }) => {
  const { id: postId } = queryString.parse(location.search);
  return <div>Comments Story {postId}</div>;
};
