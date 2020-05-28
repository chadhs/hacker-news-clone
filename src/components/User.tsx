import React from 'react';
import queryString from 'query-string';
import { fetchUserById, fetchItems } from '../api/hackerNews';
import { formatDateTimeMetadata } from '../common/time';
import { StoryLink } from './StoryLink';
import { ThemeContext } from '../contexts/theme';

export const User = ({ location }) => {
  const { id: userId } = queryString.parse(location.search);

  const [user, setUser] = React.useState(null);
  const [userItems, setUserItems] = React.useState([]);

  const theme = React.useContext(ThemeContext);

  React.useEffect(() => {
    const getAndSetUserData = async () => {
      const user = await fetchUserById(userId);
      setUser(user);
      if (user?.submitted?.length > 0) {
        setUserItems(await fetchItems(user.submitted));
      }
    };

    getAndSetUserData();
  }, [location, userId]);

  const userStories = userItems.filter((item) => item?.type === 'story');

  return (
    <div>
      <div className="user-name">{user?.id}</div>
      <div className="user-metadata">
        joined {formatDateTimeMetadata(user?.created)} has {user?.karma} karma
      </div>
      <div
        className="user-about"
        dangerouslySetInnerHTML={{ __html: user?.about }}
      />
      <div className="user-posts-title">Posts</div>
      {userStories?.map((story) => (
        <React.Fragment key={story.id}>
          <StoryLink story={story} />
        </React.Fragment>
      ))}
    </div>
  );
};
