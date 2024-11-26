export interface HymnLyrics {
  [num: string]: {
    name: string;
    lyrics: Lyrics;
    authors: Author;
    verses: string;
  }
}

export interface Lyrics {
  [timing: string]: {
    ordinal: string;
    text: string;
  }
}

export interface Author {
  writers: string[];
  composers: string[];
}

export interface Hymn {
  [num: string]: string;
}
