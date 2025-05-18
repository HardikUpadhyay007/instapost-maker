import React, { forwardRef } from "react";
import { HeartIcon, SearchIcon, BookmarkIcon } from "lucide-react";
export const SocialPostPreview = forwardRef(
    (
        {
            title,
            username,
            caption,
            image,
            backgroundColor,
            postColor,
            titleFont,
            fontSize,
            textColor,
            captionColor,
            isLiked,
            isBookmarked,
            imageFilter,
            showDate,
            likeCount,
            hashtags,
            isUploading,
        },
        ref
    ) => {
        const currentDate = new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
        return (
            <div
                ref={ref}
                className="w-full max-w-sm mx-auto relative"
                style={{
                    backgroundColor,
                    padding: "20px",
                    borderRadius: "10px",
                }}
            >
                <div
                    className="rounded-3xl overflow-hidden shadow-md"
                    style={{
                        backgroundColor: postColor,
                    }}
                >
                    <div className="p-5 flex justify-between items-start">
                        <div
                            className={`whitespace-pre-line ${fontSize} ${titleFont} leading-tight`}
                            style={{
                                color: textColor,
                            }}
                        >
                            {title}
                        </div>
                        <div className="mt-2">
                            <div className="space-y-1">
                                <div className="w-6 h-0.5 bg-black"></div>
                                <div className="w-6 h-0.5 bg-black"></div>
                                <div className="w-6 h-0.5 bg-black"></div>
                            </div>
                        </div>
                    </div>
                    <div className="px-5">
                        <div className="relative">
                            {isUploading ? (
                                <div className="w-full h-64 flex items-center justify-center bg-gray-100">
                                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
                                </div>
                            ) : (
                                <img
                                    src={image}
                                    alt="Post content"
                                    className="w-full h-64 object-cover"
                                    style={{
                                        filter: imageFilter,
                                    }}
                                />
                            )}
                        </div>
                    </div>
                    <div className="p-4 flex justify-between items-center">
                        <div className="flex space-x-4 items-center">
                            <div className="flex items-center">
                                <HeartIcon
                                    size={24}
                                    fill={isLiked ? "red" : "none"}
                                    color={isLiked ? "red" : "black"}
                                    className="cursor-pointer"
                                />
                                {parseInt(likeCount) > 0 && (
                                    <span className="ml-1 text-sm">
                                        {likeCount}
                                    </span>
                                )}
                            </div>
                            <SearchIcon size={24} />
                            <div className="transform rotate-45">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                                </svg>
                            </div>
                        </div>
                        <BookmarkIcon
                            size={24}
                            fill={isBookmarked ? "black" : "none"}
                            className="cursor-pointer"
                        />
                    </div>
                    <div className="px-4 pb-6">
                        <div className="flex justify-between items-center mb-2">
                            <p className="font-medium text-sm">{username}</p>
                            {showDate && (
                                <p className="text-xs text-gray-500">
                                    {currentDate}
                                </p>
                            )}
                        </div>
                        <p
                            className="text-sm"
                            style={{
                                color: captionColor,
                            }}
                        >
                            {caption}
                        </p>
                        {hashtags && (
                            <p className="text-sm text-blue-600 mt-2">
                                {hashtags}
                            </p>
                        )}
                    </div>
                </div>
                {/* <div className="mt-4 text-center text-white text-sm opacity-70">
          link the link in the bio
        </div> */}
            </div>
        );
    }
);
