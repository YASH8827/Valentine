
export interface PoemData {
  title: string;
  content: string;
}

export interface DateVision {
  description: string;
  imageUrl: string;
}

export enum AppSection {
  LANDING = 'LANDING',
  FLOWER_TRANSITION = 'FLOWER_TRANSITION',
  PROMISE_DAY = 'PROMISE_DAY',
  HOME = 'HOME',
  POEM = 'POEM',
  VISION = 'VISION',
  QUESTION = 'QUESTION'
}
