document.requestStorageAccess().then(
  () => {
    console.log("cookie access granted");
  },
  () => {
    console.log("cookie access denied");
  },
);

document.requestStorageAccess({ localStorage: true }).then(
  (handle) => {
    console.log("localStorage access granted");
    handle.localStorage.setItem("foo", "bar");
  },
  () => {
    console.log("localStorage access denied");
  },
);


const skipAds = () => {
  const adSkipButton = document.querySelector('.ytp-skip-ad-button__icon');
  const longAdSkipBitton = document.querySelector('.ytp-preview-ad__text');
  if (adSkipButton) {
    adSkipButton.click();
    console.log('Ad skipped');
  }

  if (longAdSkipBitton) {
    adSkipButton.click();
    console.log('Ad skipped');
  }

};

const observer = new MutationObserver(skipAds);
observer.observe(document, { childList: true, subtree: true });

console.log('YouTube Ad Skipper is running');
