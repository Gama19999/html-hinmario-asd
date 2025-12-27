export type Theme = 'light' | 'dark';
export type ResultType = 'found' | 'playlist';
export type Hymn = { number: string, title: string };
export type MediaState = 'playing' | 'paused';
export type FullScreenSrc = 'f11' | 'app';
export type FullScreenEvt = { src: FullScreenSrc, state: boolean };