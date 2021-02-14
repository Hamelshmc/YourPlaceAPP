'use strict';

const PDFLib = require('pdf-lib');

async function generatePDFContract(text) {
  const pdfDoc = await PDFLib.PDFDocument.create();
  const page = pdfDoc.addPage([600, 900]);
  page.drawText(text.pag1, {
    x: 10,
    y: 880,
    size: 10,
  });
  const page2 = pdfDoc.addPage([600, 900]);
  page2.drawText(text.pag2, {
    x: 10,
    y: 880,
    size: 10,
  });
  const page3 = pdfDoc.addPage([600, 900]);
  page3.drawText(text.pag3, {
    x: 10,
    y: 880,
    size: 10,
  });
  const page4 = pdfDoc.addPage([600, 900]);
  page4.drawText(text.pag4, {
    x: 10,
    y: 880,
    size: 10,
  });
  pdfDoc.setTitle('CONTRATO DE ARRENDAMIENTO DE TEMPORADA');
  pdfDoc.setSubject('Contrato para uso de vivienda');
  pdfDoc.setKeywords(['alquiler', 'contrato', 'piso', 'inquilino', 'casero']);
  pdfDoc.setAuthor('YOURPLACE');
  pdfDoc.setLanguage('es-es');

  return await pdfDoc.saveAsBase64({ dataUri: true });
}

module.exports = generatePDFContract;
