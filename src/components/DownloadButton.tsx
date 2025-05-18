import React, { useState, createElement } from "react";
import { DownloadIcon } from "lucide-react";
import { toPng } from "html-to-image";
export const DownloadButton = ({ postRef }) => {
    const [isDownloading, setIsDownloading] = useState(false);
    const handleDownload = async () => {
        if (!postRef.current || isDownloading) return;
        setIsDownloading(true);
        try {
            // Wait for any pending state updates
            await new Promise((resolve) => setTimeout(resolve, 500));
            const scale = 3; // Higher quality
            const dataUrl = await toPng(postRef.current, {
                quality: 1,
                pixelRatio: scale,
                cacheBust: true, // Removed the style property to avoid cropping
            });
            // Create download link
            const link = document.createElement("a");
            link.download = `social-post-${new Date().getTime()}.png`;
            link.href = dataUrl;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error("Error generating image:", error);
            alert(
                "There was an error downloading the image. Please try again."
            );
        } finally {
            setIsDownloading(false);
        }
    };
    return (
        <button
            onClick={handleDownload}
            disabled={isDownloading}
            className={`w-full py-3 px-4 ${
                isDownloading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
            } text-white rounded-lg flex items-center justify-center font-medium transition-colors`}
        >
            {isDownloading ? (
                <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Downloading...
                </>
            ) : (
                <>
                    <DownloadIcon size={20} className="mr-2" />
                    Download Post
                </>
            )}
        </button>
    );
};
