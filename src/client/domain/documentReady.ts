/* ready.ts */

export function documentReady(callback: () => void) {
    const isDocumentReady = (document.readyState === "complete" || document.readyState !== "loading");

    if(isDocumentReady) {
        ready();
    }
    else {
        document.addEventListener("DOMContentLoaded", ready);

        // a fallback to window.onload, that will always work
        window.addEventListener("load", ready);
    }

    function ready() {
        // cleanup
        document.removeEventListener("DOMContentLoaded", ready);
        window.removeEventListener("load", ready);

        // allow the opportunity to delay
        setTimeout(callback);
    }
}