import React, { useEffect, useRef, useState } from 'react';
import StyledTooltip from './StyledTooltip';

import './styles.scss';
interface Props {
  containerWidth: number;
  text: string;
}
const CustomTooltip: React.FC<Props> = ({ containerWidth, text }) => {
  const [isTextCut, setIsTextCut] = useState<boolean>(false);
  const [outputText, setOutputText] = useState<string>('');
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const textWidth = textRef.current.offsetWidth;

      if (textWidth > containerWidth) {
        for (let i = 1; i < text.length; i += 1) {
          const slicedText = text.slice(0, -i) + '...';
          textRef.current.innerText = slicedText;
          const newWidth = textRef.current.offsetWidth;
          if (newWidth <= containerWidth) {
            setOutputText(slicedText);
            setIsTextCut(true);
            break;
          }
        }
      }
      if (textWidth <= containerWidth && !outputText) {
        setOutputText(text);
        setIsTextCut(false);
      }
    }
  }, [containerWidth, outputText, text]);

  return (
    <div
      className={`tooltip__wrapper ${isTextCut ? 'cursor-pointer' : 'cursor-auto'}`}
    >
      <StyledTooltip title={isTextCut ? text : ''} placement={'bottom-end'}>
        <p ref={textRef} className={'text_size__medium text_color__main'}>
          {outputText}
        </p>
      </StyledTooltip>
    </div>
  );
};

export default CustomTooltip;
