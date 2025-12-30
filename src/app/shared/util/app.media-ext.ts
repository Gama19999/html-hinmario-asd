/**
 * If `enable-experimental-web-platform-features` chromium flag is enabled, checks if a video
 * source has more than one audio track 
 * @param videoEl Reference to video element
 * @returns Whether video has multiple audio tracks
 */
export function videoHasMultipleTracks(videoEl: HTMLVideoElement): boolean {
    return !!videoEl.audioTracks && videoEl.audioTracks.length > 1;
}

/**
 * If `enable-experimental-web-platform-features` chromium flag is enabled, iterates through
 * all video audio tracks and enables the one requested while the others are set disabled
 * @param videoEl Reference to video element
 * @param lang Desired audio track to enable
 */
export function enableTrack(videoEl: HTMLVideoElement, lang: 'spa' | 'eng') {
    const tracks = videoEl.audioTracks;
    if (!tracks) return;
    for (let i = 0; i < tracks.length; i++)
        tracks[i].language === lang ? tracks[i].enabled = true : false;
}