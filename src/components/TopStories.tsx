import React from 'react';
import { fetchStoryIds, fetchStories } from '../utils/api';

export const TopStories = () => {
  const [stories, setStories] = React.useState([]);

  React.useEffect(() => {
    const getAndSetStories = async () => {
      const storyIds = await fetchStoryIds({ type: 'top', count: 20 });
      const stories = await fetchStories(storyIds);
      setStories(stories);
    };

    if (stories.length < 1 || stories === undefined) {
      getAndSetStories();
    }
  }, [stories]);

  return (
    <div>
      <h2>Top Stories</h2>
      {stories.map((story) => {
        return (
          <React.Fragment key={story.id}>
            <div className="story">
              <a href={story.url}>{story.title}</a>
              {story.by} {story.time}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};
