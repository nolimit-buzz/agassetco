import React from 'react';

interface SectionHeadingProps {
  text: string;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ text, className = '' }) => {
  const words = text.trim().split(/\s+/);

  let content: React.ReactNode;

  if (words.length === 1) {
    const word = words[0];
    const start = Math.ceil(word.length * 0.4);
    const end = Math.ceil(word.length * 0.7);
    content = (
      <>
        {word.slice(0, start)}
        <span className="text-ag-lime">{word.slice(start, end)}</span>
        {word.slice(end)}
      </>
    );
  } else {
    const limeIndex = words.length === 2 ? words.length - 1 : words.length - 2;
    content = words.map((word, i) => (
      <React.Fragment key={i}>
        {i > 0 && ' '}
        {i === limeIndex ? <span className="text-ag-lime">{word}</span> : word}
      </React.Fragment>
    ));
  }

  return (
    <h2 className={`text-4xl md:text-6xl font-bold text-ag-green-950 tracking-tight leading-[1.05] mb-10 max-w-2xl ${className}`}>
      {content}
    </h2>
  );
};

export default SectionHeading;
