import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link to={`/user?id=${story?.by}`} className={`${theme}`}>
            {story?.by}
          </Link>{' '}
          on {formatDateTimeMetadata(story?.time)} with{' '}
          <Link to={`/post?id=${story?.id}`} className={`${theme}`}>
            {story?.kids?.length || 0}
          </Link>{' '}
          comments
        </div>
      </div>
      <br />
    </React.Fragment>
  );
};
