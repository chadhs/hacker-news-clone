import React from 'react';
import { fetchStoryIds, fetchStories } from '../utils/api';
import { formatDateTimeMetadata } from '../utils/time';
import { ThemeContext } from '../contexts/theme';

export const Stories = ({ storyType, storyCount }) => {
  const [stories, setStories] = React.useState([]);
  const theme = React.useContext(ThemeContext);

  React.useEffect(() => {
    const getAndSetStories = async () => {
      const storyIds = await fetchStoryIds({
        type: storyType,
        count: storyCount,
      });
      const stories = await fetchStories(storyIds);
      setStories(stories);
    };

    getAndSetStories();
  }, [storyType, storyCount]);

  return (
    <div>
      {stories.map((story) => {
        return (
          <React.Fragment key={story.id}>
            <div className="story">
              <div className={`story-title story-link-${theme}`}>
                <a href={story.url}>{story.title}</a>
              </div>
              <div className="story-metadata">
                by{' '}
                <a href="/" className={`${theme}`}>
                  {story.by}
                </a>{' '}
                on {formatDateTimeMetadata(story.time)} with{' '}
                <a href={`/post?id=${story.id}`} className={`${theme}`}>
                  {story?.kids?.length || 0}
                </a>{' '}
                comments
              </div>
            </div>
            <br />
          </React.Fragment>
        );
      })}
    </div>
  );
};
