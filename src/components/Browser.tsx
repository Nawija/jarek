import React from "react";
import { FaLock } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import CopyToClipboard from "./Buttons/CopyToClipboard";
import Tooltip from "./Tooltip";

export default function Browser() {
    const url = "https://seovileo.pl";
    return (
        <div className="w-[88vw] h-[80vw] max-h-[800px] border border-border-primary wrapper bg-background-secondary rounded-xl backdrop-blur-md relative">
            <div className="flex items-center justify-between p-1.5 lg:px-4 border-b border-border-primary">
                <div className="flex space-x-1 lg:space-x-2 ">
                    <Tooltip text="Close">
                        <div className="h-2.5 lg:h-3 w-2.5 lg:w-3 bg-red-500/90 hover:bg-red-400 rounded-full" />
                    </Tooltip>

                    <Tooltip text="Full Screen">
                        <div className="h-2.5 lg:h-3 w-2.5 lg:w-3 bg-yellow-500/90 hover:bg-yellow-400 rounded-full" />
                    </Tooltip>

                    <Tooltip text="Minimize">
                        <div className="h-2.5 lg:h-3 w-2.5 lg:w-3 bg-green-500/90 hover:bg-green-400 rounded-full" />
                    </Tooltip>
                </div>
                <div className="bg-white/5 w-full max-w-[56vw] lg:max-w-[32vw] px-3 text-xs lg:text-sm lg:mx-12 p-0.5 rounded-xl flex items-center justify-center">
                    <FaLock size={12} />
                    <p className="ml-2">{url}</p>
                    <Tooltip text="Kopiuj">
                        <CopyToClipboard textToCopy={url} />
                    </Tooltip>
                </div>
                <Tooltip text="More Options">
                    <div className="p-1 bg-white/10 rounded-full cursor-pointer">
                        <IoIosArrowDown size={14} />
                    </div>
                </Tooltip>
            </div>
        </div>
    );
}
