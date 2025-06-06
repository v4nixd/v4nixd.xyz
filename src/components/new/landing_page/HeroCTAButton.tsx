import React from 'react'

const BASE_LINK = "v4nixd.xyz"

type HeroCTAButtonStyleType = 'main' | 'secondary' | 'disabled'

interface HeroCTAButtonProps {
    text: string;
    link: string;
    style: HeroCTAButtonStyleType;
}

const HeroCTAButton: React.FC<HeroCTAButtonProps> = ({ text, link, style }) => {
    const baseButtonStyle = 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors h-10 px-4 py-2'
    let buttonStyle = '';

    switch (style) {
        case 'main':
            buttonStyle = 'bg-[#FAFAFA] text-[#171717] hover:bg-[#FAFAFA]/50';
            break;
        case 'secondary':
            buttonStyle = 'bg-[#282828] text-[#FAFAFA] hover:bg-[#282828]/50';
            break;
        case 'disabled':
            buttonStyle = 'backdrop-blur-sm text-[#AAA] hover:bg-[#FAFAFA]/10 border border-white/20'
            break;
    }

    return (
        <a href={style === 'disabled' ? undefined : `https://${BASE_LINK}/beta/new/${link}`} target="_blank" rel="noopener noreferrer nofollow">
            <button className={`${baseButtonStyle} ${buttonStyle}`} disabled={style === 'disabled'}>{text}</button>
        </a>
    )
}

export default HeroCTAButton;