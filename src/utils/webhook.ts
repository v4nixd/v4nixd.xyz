const apiUrl = 'http://localhost:9000/report/md';
// const apiUrl = 'https://api.v4nixd.xyz/md/report';

export async function sendWebhookReport(errorMessage: string): Promise<void> {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: errorMessage,
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Report failed\nstatus - ${response.status}\nerror - ${errorText}`);
        }
    } catch (error) {
        console.error("Failed to send report to API", error);
    }
}