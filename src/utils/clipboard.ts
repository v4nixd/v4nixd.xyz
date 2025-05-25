export function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text)
        .then(() => alert("Copied to clipboard!"))
        .catch((err) => alert("Failed to copy: " + err));
}