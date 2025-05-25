import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { getMarkdown } from "../utils/api";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

function ViewMarkdown() {
    const { uuid } = useParams<{ uuid: string }>();
    const [markdown, setMarkdown] = useState('');
    const [error, setError] = useState<string | null>(null);

    const schema = {
        tagNames: [
            'p', 'br', 'hr', 'blockquote', 'pre', 'code', 'del', 'em', 'i', 'strong', 'b', 'small',
            'ul', 'li', 'ol',
            'a', 'img',
            'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
            'table', 'thead', 'tbody', 'tr', 'th', 'td',
            'sup', 'sub', 'span', 'details', 'summary', 'mark'
        ],
        attributes: {
            a: ['href', 'title'],
            img: ['src', 'alt', 'width', 'height', 'loading'],
            '*': ['class'],
        },
        protocols: {
            href: ['http', 'https', 'mailto'],
            src: ['http', 'https', 'data'],
        },
    };

    useEffect(() => {
        if (uuid) {
            getMarkdown(uuid)
                .then(([md]) => setMarkdown(md))
                .catch((err) => setError(err.message));
        }
    }, [uuid]);

    if (error) return <div className="text-red-500 p-10">Error: {error}</div>

    return (
        <div className="markdown-body w-[100%] min-h-[100vh] prose overflow-auto text-white bg-zinc-800 p-20">
            <Markdown rehypePlugins={[rehypeRaw, remarkGfm, [rehypeSanitize, schema]]}>
                {markdown}
            </Markdown>
        </div>
    )
}

export default ViewMarkdown;