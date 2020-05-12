const hnBaseUrl = `https://hacker-news.firebaseio.com/v0`;

export const fetchStoryIds = async ({ type, count }) => {
  return await fetch(`${hnBaseUrl}/${type}stories.json`)
    .then((res) => {
      return res.json();
    })
    .then((ids) => {
      return ids?.slice(0, count);
    });
};

export const fetchItemById = async (id) => {
  return await fetch(`${hnBaseUrl}/item/${id}.json`).then((res) => {
    return res.json();
  });
};

export const fetchStories = async (storyIds) => {
  console.warn(storyIds);
  return Promise.all(
    await storyIds.map((id) => {
      return fetchItemById(id);
    }),
  );
};
