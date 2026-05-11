export { };

declare global {
    interface Window {
        /** API to comunicate with Electron (PC app) */
        electronAPI: {
            /** 
             * @param like As `asleep` or `awake` — If `undefined` requests current display config
             * @returns Promises current display config
             */
            requestDisplaySleep: (like?: string) => Promise<string>,
        };
    }
    
    // If `enable-experimental-web-platform-features` chromium flag is enabled
    
    interface HTMLMediaElement {
        audioTracks?: AudioTrackList;
    }

    interface AudioTrackList extends EventTarget {
        length: number;
        [index: number]: AudioTrack;
        getTrackById(id: string): AudioTrack | null;
    }
    
    interface AudioTrack {
        enabled: boolean;
        id: string;
        kind: string;
        label: string;
        language: string;
    }
}