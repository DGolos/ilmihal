import React, { useState } from "react";
import { translationService } from "../../services/TranslationService";

interface ParagraphProps {
  paragraphs?: string[];
}

export const ParagraphSection: React.FC<ParagraphProps> = ({ paragraphs }) => {
    
    
  const paragraphsItems = paragraphs?.map((paragraph) => (
    <h2 className="lesson-note">{translationService.getLabel(paragraph)}</h2>
  ));

  return (<>{paragraphsItems}</>);
};
