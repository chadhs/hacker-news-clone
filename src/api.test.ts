import { fetchStoryIds, fetchItemById } from './api';

describe('All items fetched from the API successfully.', () => {
  it('returns newest 20 story ids', async () => {
    const newStories = await fetchStoryIds({ type: 'new', count: 20 });
    expect(newStories.length).toBe(20);
  });
  it('returns top 20 story ids', async () => {
    const topStories = await fetchStoryIds({ type: 'top', count: 20 });
    expect(topStories.length).toBe(20);
  });
  it('returns story details by id', async () => {
    const topStories = await fetchStoryIds({ type: 'top', count: 20 });
    const storyDetails = await fetchItemById(topStories[0]);
    expect(storyDetails).toHaveProperty('id');
  });
});
