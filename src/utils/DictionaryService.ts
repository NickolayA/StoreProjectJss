import { DictionaryPhrases, DictionaryService } from '@sitecore-jss/sitecore-jss';
import axios from 'axios';

export default class StoreDictionaryService implements DictionaryService {
  dictionaryApi: string = 'sitecore/api/jss/dictionary';

  apiHost: string;
  siteName: string;
  apiKey: string;

  constructor(apiHost: string, siteName: string, apiKey: string) {
    this.apiHost = apiHost;
    this.siteName = siteName;
    this.apiKey = apiKey;
  }

  fetchDictionaryData = async (language: string): Promise<DictionaryPhrases> => {
    const dictionaryApiUrl: string = this.getUrl(language);

    const phrases: DictionaryPhrases = (await axios.get(dictionaryApiUrl)).data.phrases;

    return phrases;
  };

  getUrl = (language: string): string => {
    return `${this.apiHost}/${this.dictionaryApi}/${this.siteName}/${language}?sc_apikey=${this.apiKey}`;
  };
}
