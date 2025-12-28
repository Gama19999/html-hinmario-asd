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
}