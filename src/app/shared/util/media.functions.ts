/**
 * @param videoEl Video element
 * @param numeral Hymn numeral to load
 */
export function loadVideoSource(videoEl: HTMLVideoElement, numeral: string) {
    videoEl.src = `media/videos/${numeral}.mp4`;
    videoEl.load();
    videoEl.volume = 1;
    videoEl.play();
}

/**
 * Dwindles the video volume by `0.1` each 100ms until reaching `0`
 * @param videoEl Video element
 */
export function fadeOut(videoEl: HTMLVideoElement) {
    if (videoEl.volume > 0.1) {
      videoEl.volume -= 0.1;
      setTimeout(() => fadeOut(videoEl), 100);
    } else {
      videoEl.volume = 0;
      videoEl.pause();
      videoEl.src = '';
    }
  }

/** 
 * @param videoEl Video element
 * @returns Whether video has multiple audio tracks
 * @requires `enable-experimental-web-platform-features` chromium flag must be `enabled`
 */
export function videoHasMultipleTracks(videoEl: HTMLVideoElement): boolean {
    return !!videoEl.audioTracks && videoEl.audioTracks.length > 1;
}

/**
 * Disables the currently enabled audio track and enables the other. This app videos have only `2` tracks (`choir`, `track`).
 * @param videoEl Video element
 * @requires `enable-experimental-web-platform-features` chromium flag must be `enabled`
 */
export function toggleAudioTrack(videoEl: HTMLVideoElement) {
    const audioTracks = videoEl.audioTracks;
    if (audioTracks) {
        audioTracks[0].enabled = !audioTracks[0].enabled;
        audioTracks[1].enabled = !audioTracks[0].enabled;
    }
}

/**
 * @param imgEl Image element
 * @param numeral Hymn numeral to display
 */
export async function loadPrevImageSource(imgEl: HTMLImageElement, numeral: string) {
    const current = +(imgEl.dataset['current'] ?? '0');
    const previous = `${current - 1}`;
    const url = `media/pictures/${numeral}/${previous.padStart(2, '0')}.webp`;
    if (await imageExists(url)) {
        imgEl.src = url;
        imgEl.dataset['current'] = previous;
    }
}

/**
 * @param imgEl Image element
 * @param numeral Hymn numeral to display
 */
export async function loadNextImageSource(imgEl: HTMLImageElement, numeral: string) {
    const previous = +(imgEl.dataset['current'] ?? '0');
    const current = `${previous + 1}`;
    const url = `media/pictures/${numeral}/${current.padStart(2, '0')}.webp`;
    if (await imageExists(url)) {
        imgEl.src = url;
        imgEl.dataset['current'] = current;
    }
}

function imageExists(url: string) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}