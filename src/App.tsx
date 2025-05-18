import React, { useState, useRef } from 'react';
import { PostCreator } from './components/PostCreator';
export function App() {
  return <div className="flex w-full min-h-screen justify-center items-center bg-gray-100">
      <PostCreator />
    </div>;
}