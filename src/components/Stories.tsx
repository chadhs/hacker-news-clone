import React from 'react';
import { fetchStoryIds, fetchItems } from '../utils/api';
import { StoryLink } from './StoryLink';

export const Stories = ({ storyType, storyCount }) => {
  const [stories, setStories] = React.useState([]);

  React.useEffect(() => {
    const getAndSetStories = async () => {
      const storyIds = await fetchStoryIds({
        type: storyType,
        count: storyCount,
      });
      const stories = await fetchItems(storyIds);
      setStories(stories);
    };

    getAndSetStories();
  }, [storyType, storyCount]);

  return (
    <div>
      {stories.map((story) => (
        <React.Fragment key={story.id}>
          <StoryLink story={story} />
        </React.Fragment>
      ))}
    </div>
  );
};
