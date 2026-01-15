export { };

declare global {
    interface Window {
        electron: {
            /**
             * Resolves electron resources folder path
             * @returns Returns electron video sources path
             */
            getVideoSourcesPath: () => Promise<string>,
        };
    }

    // If `enable-experimental-web-platform-features` chromium flag is enabled

    interface HTMLMediaElement {
        audioTracks?: AudioTrackList;
    }
    interface AudioTrackList {
        length: number;
        [index: number]: AudioTrack;
        getTrackById(id: string): AudioTrack | null;
        onaddtrack: ((this: AudioTrackList, ev: Event) => any) | null;
        onremovetrack: ((this: AudioTrackList, ev: Event) => any) | null;
    }
    interface AudioTrack {
        id: string;
        kind: string;
        label: string;
        language: string;
        enabled: boolean;
    }
}