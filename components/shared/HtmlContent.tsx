"use client"
import createDOMPurify from 'dompurify';
import React, { useEffect, useState } from 'react';

type HtmlContentProps = {
  content: string;
};

const HtmlContent: React.FC<HtmlContentProps> = ({ content }) => {
  const [sanitizedContent, setSanitizedContent] = useState('');

  useEffect(() => {
    const DOMPurify = createDOMPurify(window);
    setSanitizedContent(DOMPurify.sanitize(content));
  }, [content]);

  return (
    <div
      className="rich-text-content"
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
};

export default HtmlContent;
