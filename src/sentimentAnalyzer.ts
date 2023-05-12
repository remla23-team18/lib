import axios from 'axios';
import { VersionUtil } from './versionUtil';

// Define response type
interface Response {
  sentiment: number;
}

// A class that analyzes the sentiment of a string
// using an API endpoint
export class SentimentAnalyzer {
  endpoint: string;
  version: VersionUtil;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
    this.version = new VersionUtil();
  }

  async analyzeSentiment(text: string): Promise<number> {
    const { data } = await axios.post<Response>(this.endpoint, { msg: text });

    return data.sentiment;
  }

  getVersion() {
    return this.version.getVersion();
  }
}
