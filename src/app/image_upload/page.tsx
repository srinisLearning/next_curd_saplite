'use client'
import React, { useState, useRef, ChangeEvent, FormEvent } from 'react';

const ImageUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files ? event.target.files[0] : null);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    // Replace this with your upload function
    const response = await fetch('/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleUpload} ref={inputRef} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default ImageUpload;