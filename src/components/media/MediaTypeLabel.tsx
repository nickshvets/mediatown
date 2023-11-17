import React from 'react';
interface MediaTypeLabelProps {
  type: string;
  style: React.CSSProperties;
}

export const MediaTypeLabel: React.FC<MediaTypeLabelProps> = ({
  type,
  style,
}) => {
  const getBackgroundColor = (type: string) => {
    switch (type) {
      case 'Game':
        return '#27ae60';
      case 'Movie':
        return '#2980b9';
      case 'TV Show':
        return '#c0392b';
      default:
        return '#bdc3c7';
    }
  };

  const mergedStyles: React.CSSProperties = {
    position: 'absolute',
    right: '0.5rem',
    bottom: '0.5rem',
    backgroundColor: getBackgroundColor(type),
    display: 'inline-block',
    borderRadius: '3px',
    width: '60px',
    textAlign: 'center',
    padding: '0 8px',
    ...style,
  };

  return <span style={mergedStyles}>{type}</span>;
};
