export { };

declare global {
    interface Window {
        electron: {
            /**
             * Toggles fullscreen mode
             * @param flag Boolean indicating whether to go fullscreen
             */
            setFullScreenAs: (flag: boolean) => void,
            /**
             * Makes the app to keep the screen always on
             * @returns Promise\<number> with the blocker ID. Save it to turn off this function
             */
            preventDisplaySleep: () => Promise<number>,
            /**
             * Makes the app restore the screen power configuration
             * @param blockerId Number with the blocker ID previously assigned
             * @returns Promise\<boolean> with whether the specified powerSaveBlocker has been stopped
             */
            allowDisplaySleep: (blockerId: number) => Promise<boolean>,
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