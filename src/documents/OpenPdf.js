import React from 'react';
import { Document} from 'react-pdf';

import menuPdf from './menu.pdf';

export  function OpenPdf() {
  console.log(menuPdf);
    return (
      <Document file={menuPdf}>
      </Document>
    );
  }

