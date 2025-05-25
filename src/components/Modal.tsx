import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    submitText: string;
    onSubmit: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title = "Title", submitText = "Submit", onSubmit, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-jb-gray-2/50 flex items-center justify-center z-50">
            <div className="bg-jb-gray-2 font-inter border-[0.5px] border-jb-gray-3 text-white rounded-[8px] shadow-xl w-full max-w-md overflow-hidden">
                <div className="h-[33px] border-b-[0.5px] border-jb-gray-3 w-md flex items-center justify-center text-jb-gray-12">
                    <p className="font-semibold">{title}</p>
                </div>
                <div className="p-5">
                    {children}
                </div>
                <div className="relative h-[56px] border-t-[0.5px] border-jb-gray-3 w-md flex text-jb-gray-12">
                    <div className="absolute mx-[20px] right-0 my-[10px] space-x-[12px]">
                        <button className="border-1 border-jb-gray-5 hover:border-jb-gray-7 bg-transparent rounded-[4px] px-[12px] py-[6px] focus:outline-2 focus:outline-offset-2 focus:outline-jb-blue-6 cursor-pointer" onClick={onClose}>Close</button>
                        <button className="bg-jb-blue-6 rounded-[4px] px-[12px] py-[6px] hover:bg-jb-blue-5 active:bg-jb-blue-4 focus:outline-2 focus:outline-offset-2 focus:outline-jb-blue-6 cursor-pointer" onClick={onSubmit}>{submitText}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;