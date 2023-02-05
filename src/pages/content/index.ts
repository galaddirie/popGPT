import * as pdfjsLib from 'pdfjs-dist';
import { TextItem } from 'pdfjs-dist/types/src/display/api';
import { string } from 'prop-types';
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

async function _fetchData(url: string): Promise<ArrayBuffer> {
  if (!url.includes('.pdf')) { throw new Error('Not a PDF'); }
  let response = await fetch(url);
  console.log(response);
  let data = await response.arrayBuffer();
  return data;
};

async function parsePDF(data: ArrayBuffer | string): Promise<string> {
  let doc = await pdfjsLib.getDocument({ data }).promise;
  let pageTexts = Array.from({ length: doc.numPages }, async (v, i) => {
    return (
      await (await doc.getPage(i + 1)).getTextContent())
      .items.map(token => {
        return (token as TextItem).str; /**@todo : fix this */
      })
      .join('');
  });
  return (await Promise.all(pageTexts)).join('');
};


async function getPDF() {
  const data = await _fetchData(window.location.href)
  const response = await parsePDF(data)
  return response
}

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.message === "get_pdf") {
      (async () => {
        const data = await getPDF();
        sendResponse({ payload: data });
      })();
    }
    else if (request.message === "get_text_selection") {
      console.log('get_text_selection')
      const selection = window.getSelection();
      if (!selection) { return true };
      sendResponse({ payload: selection.toString() });
    }
    return true;
  }
);

export { }