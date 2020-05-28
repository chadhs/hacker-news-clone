import React from 'react';
import { ThemeContext } from '../contexts/theme';
import queryString from 'query-string';
import { fetchItemById, fetchStories } from '../utils/api';
import { formatDateTimeMetadata } from '../utils/time';

export const Comments = ({ location }) => {
  const { id: postId } = queryString.parse(location.search);

  const [comments, setComments] = React.useState([]);
  const theme = React.useContext(ThemeContext);

  React.useEffect(() => {
    const getAndSetComments = async () => {
      const { kids: commentIds } = await fetchItemById(postId);
      if (commentIds?.length > 0) {
        setComments(await fetchStories(commentIds));
      }
    };

    getAndSetComments();
  }, [location, postId]);

  return (
    <div>
      <div className={`story-title story-link-${theme}`}>
        Story Title and Link {postId}
      </div>
      <div className="story-metadata">Story Metadata</div>
      {comments.map((comment) => (
        <div key={comment.id} className={`Comment-${theme}`}>
          <div className="story-metadata">
            by{' '}
            <a href="/" className={`${theme}`}>
              {comment.by}
            </a>{' '}
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
