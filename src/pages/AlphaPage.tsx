import React, { useState } from 'react';
import Markdown from 'react-markdown';
import rehypeRaw from "rehype-raw";
import rehypeSanitize from 'rehype-sanitize';
import MonacoEditor from '@monaco-editor/react';
import Modal from '../components/Modal';
import { uploadMarkdown } from "../utils/api";
import { copyToClipboard } from "../utils/clipboard";
import { FiCopy } from "react-icons/fi";
import { sendWebhookReport } from "../utils/webhook";
import Loader from "../components/Loader";
import remarkGfm from "remark-gfm";

import tutorial from '../tutorial.md?raw';

const VERSION = "v0.1.0 BETA";

function AlphaPage() {
    const [markdown, setMarkdown] = useState(tutorial);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

    const [uploadErrorMessage, setUploadErrorMessage] = useState('');

    const [loading, setLoading] = React.useState(false);

    const [uuid, setUUID] = useState('');
    const [sharingLink, setSharingLink] = useState('');

    const handleChange = (value: string | undefined) => {
        setMarkdown(value || '');
    };

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

    async function upload(markdown: string) {
        setLoading(true);
        try {
            const [uploadedUUID, status] = await uploadMarkdown(markdown);
            if (status === 200 && uploadedUUID) {
                console.log(uploadedUUID, status);
                setUUID(uploadedUUID);
                setSharingLink(`https://v4nixd.xyz/beta/alpha/md/view/${uploadedUUID}`);
                setIsSuccessModalOpen(true);
                setLoading(false);
            }
        } catch (error: unknown) {
            setLoading(false);
            if (error instanceof Error) {
                setUploadErrorMessage(error.message);
                setIsErrorModalOpen(true);
            } else {
                setUploadErrorMessage("Unknown error occurred. Check console for more info and contact @v4nixd on discord");
                setIsErrorModalOpen(true);
            }
        }
    }

    return (
        <div className="flex h-[100vh]">
            <div className="w-[50%]">
                <div className="h-[100vh]">
                    <MonacoEditor
                        height="100%"
                        language="markdown"
                        value={markdown}
                        onChange={handleChange}
                        theme="vs-dark"
                        options={{
                            selectOnLineNumbers: true,
                            minimap: {enabled: true},
                            lineNumbers: 'on',
                            automaticLayout: true,
                        }}
                    />
                </div>
            </div>
            <div className="markdown-body w-[50%] prose prose-sm overflow-auto text-white bg-zinc-800 p-20">
                <Markdown rehypePlugins={[rehypeRaw, remarkGfm, [rehypeSanitize, schema]]}>{markdown}</Markdown>
            </div>
            <button onClick={() => setIsModalOpen(true)}
                    className="absolute bg-jb-blue-6 px-[12px] py-[6px] rounded-[4px] font-inter text-white bottom-[20px] right-[25px] hover:bg-jb-blue-5 active:bg-jb-blue-4 focus:outline-2 focus:outline-offset-2 focus:outline-jb-blue-4 cursor-pointer">Share
            </button>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={"Share markdown"} submitText={"Share"} onSubmit={() => {
                upload(markdown);
                setIsModalOpen(false);
            }}>
                <div className="flex items-center justify-start space-x-[6px] my-[6px]">
                    <p>Password:</p>
                    <input type="password" className="px-[9px] py-[6px] rounded-[4px] border-1 border-jb-gray-5 focus:outline-2 focus:outline-jb-blue-6"/>
                </div>
                <p className="text-sm text-jb-gray-6 mt-[8px]"><span
                    className="text-jb-red-6 font-bold">Warning!</span> Without a password, anyone with the link can
                    modify the file.</p>
            </Modal>

            <Modal isOpen={isSuccessModalOpen} onClose={() => setIsSuccessModalOpen(false)} title={"Successfull upload"} submitText={"Copy link"} onSubmit={() => copyToClipboard(sharingLink)}>
                <div className="flex items-center justify-start space-x-[2px]">
                    <div
                        className="bg-jb-gray-1 px-[9px] py-[6px] rounded-[4px] border-1 border-jb-gray-4 flex items-center justify-center w-max select-all">
                        <p className="font-jetbrains">{uuid}</p>
                    </div>
                    <button className="size-[38px] rounded-[4px] border-1 border-jb-gray-5 flex items-center justify-center cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-jb-blue-6)" onClick={() => copyToClipboard(uuid)}>
                        <FiCopy className="size-[24px] text-jb-gray-10"/>
                    </button>
                </div>
            </Modal>

            <Modal isOpen={isErrorModalOpen} onClose={() => setIsErrorModalOpen(false)} title={"Error while uploading"} submitText={"Report"} onSubmit={() => {
                sendWebhookReport(uploadErrorMessage);
                setIsErrorModalOpen(false);
            }}>
                <div className="bg-jb-gray-1 px-[9px] py-[6px] rounded-[4px] border-1 border-jb-gray-5 flex items-center justify-start">
                    <p className="font-jetbrains">{uploadErrorMessage}</p>
                </div>
                <p className="text-sm text-jb-gray-6 mt-[8px]">Click <span className="text-jb-red-6 font-bold">"Report"</span> button below to report this bug to developer to help with fixing this bug</p>
            </Modal>

            {loading && <Loader />}

            <div className="flex-wrap items-center justify-start space-y-[4px] fixed bottom-5 left-5 selection:bg-transparent pointer-events-none select-none user-drag-none cursor-default">
                <p className="text-jb-gray-6 font-montserrat font-semibold">{VERSION}</p>
                <p className="text-jb-gray-4 font-montserrat">This is <span className="font-semibold">BETA</span> version, there may be bugs which you can report to @v4nixd on discord</p>
            </div>
        </div>
    )
}

export default AlphaPage;