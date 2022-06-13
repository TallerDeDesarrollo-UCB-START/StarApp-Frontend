export function getIdFromURL() {
    const currentUrl = window.location.href;
    currentUrl.substring(currentUrl.indexOf("/") + 1);
    return currentUrl.split("/").pop();
}