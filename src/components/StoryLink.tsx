import React from 'react';
import { formatDateTimeMetadata } from '../common/time';
import { ThemeContext } from '../contexts/theme';

export const StoryLink = ({ story }) => {
  const theme = React.useContext(ThemeContext);
  return (
    <React.Fragment key={story?.id}>
      <div className="story">
        <div className={`story-title story-link-${theme}`}>
          <a href={story?.url}>{story?.title}</a>
        </div>
        <div className="story-metadata">
          by{' '}
          <a href="/" className={`${theme}`}>
            {story?.by}
          </a>{' '}
          on {formatDateTimeMetadata(story?.time)} with{' '}
          <a href={`/post?id=${story?.id}`} className={`${theme}`}>
            {story?.kids?.length || 0}
          </a>{' '}
          comments
        </div>
      </div>
      <br />
    </React.Fragment>
  );
};
