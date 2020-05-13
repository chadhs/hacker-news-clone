import React from 'react';
import { fetchStoryIds, fetchStories } from '../utils/api';

export const Stories = ({ type }) => {
  const [stories, setStories] = React.useState([]);

  React.useEffect(() => {
    const getAndSetStories = async () => {
      const storyIds = await fetchStoryIds({ type: type, count: 20 });
      const stories = await fetchStories(storyIds);
      setStories(stories);
    };

    if (stories.length < 1 || stories === undefined) {
      getAndSetStories();
    }
  }, [stories]);

  return (
    <div>
      <h2>{type === 'top' ? 'Top' : 'New'} Stories</h2>
      {stories.map((story) => {
        return (
          <React.Fragment key={story.id}>
            <div className="story">
              <div className="story-title">
                <a href={story.url}>{story.title}</a>
              </div>
              <div className="story-metadata">
                by <a href="/">{story.by}</a> on{' '}
                {new Date(story.time * 1000).toLocaleString('en-US')} with{' '}
                <a href="/">{story?.kids?.length || 0}</a> comments
              </div>
            </div>
            <br />
          </React.Fragment>
        );
      })}
    </div>
  );
};
