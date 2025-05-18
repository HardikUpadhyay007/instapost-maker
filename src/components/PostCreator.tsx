import React, { useState, useRef } from 'react';
import { SocialPostPreview } from './SocialPostPreview';
import { BackgroundSelector } from './BackgroundSelector';
import { DownloadButton } from './DownloadButton';
export const PostCreator = () => {
  const [title, setTitle] = useState('NEW\nin my blog');
  const [username, setUsername] = useState('@reallygreatsite');
  const [caption, setCaption] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non diam eleifend, imperdiet orci nec, pharetra magna. Pellentesque eget facilisis orci. Nunc malesuada magna orci, in vestibulum turpis scelerisque vitae.');
  const [image, setImage] = useState('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80');
  const [backgroundColor, setBackgroundColor] = useState('#c2b8ae');
  const [postColor, setPostColor] = useState('#f3f0e9');
  const [titleFont, setTitleFont] = useState('font-black');
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [imageFilter, setImageFilter] = useState('none');
  const [textColor, setTextColor] = useState('#000000');
  const [captionColor, setCaptionColor] = useState('#000000');
  const [fontSize, setFontSize] = useState('text-5xl');
  const [showDate, setShowDate] = useState(true);
  const [likeCount, setLikeCount] = useState('0');
  const [hashtags, setHashtags] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const postRef = useRef(null);
  const fontOptions = [{
    value: 'font-black',
    label: 'Bold'
  }, {
    value: 'font-normal',
    label: 'Normal'
  }, {
    value: 'font-light',
    label: 'Light'
  }];
  const fontSizeOptions = [{
    value: 'text-4xl',
    label: 'Small'
  }, {
    value: 'text-5xl',
    label: 'Medium'
  }, {
    value: 'text-6xl',
    label: 'Large'
  }];
  const filterOptions = [{
    value: 'none',
    label: 'None'
  }, {
    value: 'grayscale(100%)',
    label: 'Grayscale'
  }, {
    value: 'sepia(100%)',
    label: 'Sepia'
  }, {
    value: 'brightness(120%) contrast(110%)',
    label: 'Vibrant'
  }, {
    value: 'hue-rotate(90deg)',
    label: 'Cool'
  }, {
    value: 'hue-rotate(-90deg)',
    label: 'Warm'
  }, {
    value: 'blur(1px) brightness(110%)',
    label: 'Soft'
  }, {
    value: 'contrast(150%) saturate(150%)',
    label: 'Vivid'
  }];
  const handleImageUpload = e => {
    const file = e.target.files[0];
    if (file) {
      setIsUploading(true);
      const reader = new FileReader();
      reader.onload = e => {
        setImage(e.target.result);
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    }
  };
  return <div className="w-full max-w-4xl p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h1 className="text-2xl font-bold mb-4">Social Media Post Creator</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Title</label>
              <textarea className="w-full p-2 border rounded" value={title} onChange={e => setTitle(e.target.value)} rows={2} />
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Font Size
                  </label>
                  <select className="w-full p-2 border rounded" value={fontSize} onChange={e => setFontSize(e.target.value)}>
                    {fontSizeOptions.map(size => <option key={size.value} value={size.value}>
                        {size.label}
                      </option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Text Color
                  </label>
                  <input type="color" value={textColor} onChange={e => setTextColor(e.target.value)} className="w-full p-1 h-9 border rounded" />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Username</label>
              <input type="text" className="w-full p-2 border rounded" value={username} onChange={e => setUsername(e.target.value)} />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Caption ({caption.length}/500)
              </label>
              <textarea className="w-full p-2 border rounded" value={caption} onChange={e => setCaption(e.target.value.slice(0, 500))} rows={4} maxLength={500} />
              <div className="mt-2">
                <label className="block text-sm font-medium mb-1">
                  Caption Color
                </label>
                <input type="color" value={captionColor} onChange={e => setCaptionColor(e.target.value)} className="w-full p-1 h-9 border rounded" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Hashtags</label>
              <input type="text" className="w-full p-2 border rounded" value={hashtags} onChange={e => setHashtags(e.target.value)} placeholder="#nature #photography" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Like Count
              </label>
              <input type="number" className="w-full p-2 border rounded" value={likeCount} onChange={e => setLikeCount(e.target.value)} min="0" />
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input type="checkbox" checked={showDate} onChange={e => setShowDate(e.target.checked)} className="mr-2" />
                Show Date
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Upload Image
              </label>
              <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full" />
              <div className="mt-2">
                <label className="block text-sm font-medium mb-1">
                  Image Filter
                </label>
                <select className="w-full p-2 border rounded" value={imageFilter} onChange={e => setImageFilter(e.target.value)}>
                  {filterOptions.map(filter => <option key={filter.value} value={filter.value}>
                      {filter.label}
                    </option>)}
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Post Color
              </label>
              <div className="flex items-center">
                <input type="color" value={postColor} onChange={e => setPostColor(e.target.value)} className="w-10 h-10 rounded border" />
                <input type="text" value={postColor} onChange={e => setPostColor(e.target.value)} className="ml-2 p-2 border rounded" />
              </div>
            </div>
            <BackgroundSelector backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor} />
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Interactions
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input type="checkbox" checked={isLiked} onChange={e => setIsLiked(e.target.checked)} className="mr-2" />
                  Liked
                </label>
                <label className="flex items-center">
                  <input type="checkbox" checked={isBookmarked} onChange={e => setIsBookmarked(e.target.checked)} className="mr-2" />
                  Bookmarked
                </label>
              </div>
            </div>
            <DownloadButton postRef={postRef} />
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Preview</h2>
            <SocialPostPreview ref={postRef} title={title} username={username} caption={caption} image={image} backgroundColor={backgroundColor} postColor={postColor} titleFont={titleFont} fontSize={fontSize} textColor={textColor} captionColor={captionColor} isLiked={isLiked} isBookmarked={isBookmarked} imageFilter={imageFilter} showDate={showDate} likeCount={likeCount} hashtags={hashtags} isUploading={isUploading} />
          </div>
        </div>
      </div>
    </div>;
};