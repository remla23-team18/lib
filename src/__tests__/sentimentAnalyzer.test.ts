import axios from 'axios';
import { SentimentAnalyzer } from '../sentimentAnalyzer';
import { expect, jest } from '@jest/globals';
import { semverRegex } from './semverRegex';

// Avoid calling actual API, create mocked version of axios in typescript
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Mock the response from the API
mockedAxios.post.mockResolvedValue({
  data: {
    sentiment: 0,
  },
});

describe('SentimentAnalyzer', () => {
  it('should return a valid semver string', () => {
    const sentimentAnalyzer = new SentimentAnalyzer('http://localhost:3000');
    expect(sentimentAnalyzer.getVersion()).toMatch(semverRegex);
  });

  it('should return a sentiment score', async () => {
    const sentimentAnalyzer = new SentimentAnalyzer('http://localhost:3000');
    const sentiment = await sentimentAnalyzer.analyzeSentiment('I love this!');
    expect(sentiment).toBe(0);
  });
});
