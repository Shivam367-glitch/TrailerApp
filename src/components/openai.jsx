import OpenAI from 'openai';
import { OPEN_AI_KEY } from '../utils/Constants';

const client = new OpenAI({
  apiKey: OPEN_AI_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser: true
});


export default client