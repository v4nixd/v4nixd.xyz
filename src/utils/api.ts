const API_URL = "http://localhost:9000";
// const API_URL = "https://api.v4nixd.xyz";

export async function uploadMarkdown(markdown: string): Promise<[string, number]> {
    const base64 = btoa(encodeURIComponent(markdown));
    const res = await fetch(`${API_URL}/md/upload/${base64}`, {
        method: 'POST',
    });

    if (!res.ok) throw new Error('Error while uploading md');
    const data = await res.json();
    console.log(data.id);
    return [data.id, res.status];
}

export async function getMarkdown(uuid: string): Promise<[string, number]> {
    const res = await fetch(`${API_URL}/md/read/${uuid}`);
    if (res.status === 404) throw new Error('File not found');
    if (!res.ok) throw new Error('Server error');

    const data = await res.json();
    const encoded_base64 = data.b64_file;
    const decoded_base64 = atob(encoded_base64);
    const markdown = decodeURIComponent(decoded_base64);
    console.log(markdown)
    return [markdown, res.status];
}