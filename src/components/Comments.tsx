import React from 'react';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import { fetchItemById, fetchItems } from '../api/hackerNews';
import { formatDateTimeMetadata } from '../common/time';
import { StoryLink } from './StoryLink';
import { ThemeContext } from '../contexts/theme';

export const Comments = ({ location }) => {
  const { id: postId } = queryString.parse(location.search);

  const [story, setStory] = React.useState(null);
  const [comments, setComments] = React.useState([]);

  const theme = React.useContext(ThemeContext);

  React.useEffect(() => {
    const getAndSetCommentData = async () => {
      const post = await fetchItemById(postId);
      setStory(post);
      if (post?.kids?.length > 0) {
        setComments(await fetchItems(post.kids));
      }
    };

    getAndSetCommentData();
  }, [location, postId]);

  return (
    <div>
      <StoryLink story={story} />
      {comments.map((comment) => (
        <div key={comment.id} className={`Comment-${theme}`}>
          <div className="story-metadata">
            by{' '}
            <Link to="/" className={`${theme}`}>
              {comment.by}
            </Link>{' '}
            on {formatDateTimeMetadata(comment.time)}
          </div>
          <div
            className="comment-text"
            dangerouslySetInnerHTML={{ __html: comment.text }}
          />
        </div>
      ))}
    </div>
  );
};
