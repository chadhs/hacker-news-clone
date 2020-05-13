import { fetchStoryIds, fetchItemById, fetchStories } from './api';

describe('All items fetched from the API successfully.', () => {
  it('returns newest 20 story ids', async () => {
    const newStoryIds = await fetchStoryIds({ type: 'new', count: 20 });
    expect(newStoryIds.length).toBe(20);
  });
  it('returns top 20 story ids', async () => {
    const topStoryIds = await fetchStoryIds({ type: 'top', count: 20 });
    expect(topStoryIds.length).toBe(20);
  });
  it('returns story details by id', async () => {
    const topStoryIds = await fetchStoryIds({ type: 'top', count: 20 });
    const storyDetails = await fetchItemById(topStoryIds[0]);
    expect(storyDetails).toHaveProperty('id');
  });
  it('returns an array of story details', async () => {
    const topStoryIds = await fetchStoryIds({ type: 'top', count: 3 });
    const stories = await fetchStories(topStoryIds);
    expect(stories.length).toBe(3);
    expect(stories[0]).toHaveProperty('id');
  });
});
