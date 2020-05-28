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

export const fetchItems = async (itemIds) => {
  return Promise.all(
    await itemIds.map((id) => {
      return fetchItemById(id);
    }),
  );
};
