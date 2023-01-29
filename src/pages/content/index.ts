import * as pdfjsLib from 'pdfjs-dist';
import React, { useEffect } from 'react';

pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.3.122/pdf.worker.min.js";


// functional requirements
// check if pdf is on page
// right click emebdded pdf to parse
// right click pdf link to parse
// highlight pdf text and parse text
// local file pdf parse
// side panel with summary histroy for that document
// supports diferent pdf viewers
// supports pdfs in iframes
// supports diffferent pdf versions

async function getPDFfromURL(url: string): Promise<ArrayBuffer> {
  if (!url.includes('.pdf')) { throw new Error('Not a PDF'); }
  let response = await fetch(url);
  console.log(response);
  let data = await response.arrayBuffer();
  return data;
};

async function getPdfText(data: ArrayBuffer | string): Promise<string> {
  let doc = await pdfjsLib.getDocument({ data }).promise;
  let pageTexts = Array.from({ length: doc.numPages }, async (v, i) => {
    return (
      await (await doc.getPage(i + 1))
        .getTextContent())
      .items.map(token => {
        console.log(token);
        String(token)
      })
      .join('');
  });
  return (await Promise.all(pageTexts)).join('');
};

export default getPdfText;