import { AnswersHeadlessProvider } from '@yext/answers-headless-react';

type HeadlessProviderProps = Parameters<typeof AnswersHeadlessProvider>[0];

export const answersHeadlessConfig: HeadlessProviderProps = {
  apiKey: '4b4d6f2740dfba8da69d2879d672deaf',
  verticalKey : "locations",
  experienceKey: 'pacific-smiles',
  locale: 'en',
  sessionTrackingEnabled: true
};