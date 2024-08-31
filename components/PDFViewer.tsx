// import React, { useEffect, useRef } from 'react';
// import { pdfjs } from 'pdfjs-dist';

// // PDF.js의 workerSrc 설정
// pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// interface PDFViewerProps {
//   pdfUrl: string;
// }

// const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl }) => {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);

//   useEffect(() => {
//     const loadPDF = async () => {
//       const loadingTask = pdfjs.getDocument(pdfUrl);
//       const pdf = await loadingTask.promise;
//       const page = await pdf.getPage(1); // 첫 페이지만 로드

//       const viewport = page.getViewport({ scale: 1 });
//       const canvas = canvasRef.current;
//       if (canvas) {
//         const context = canvas.getContext('2d');
//         canvas.height = viewport.height;
//         canvas.width = viewport.width;

//         const renderContext = {
//           canvasContext: context!,
//           viewport: viewport,
//         };
//         await page.render(renderContext).promise;
//       }
//     };

//     loadPDF();
//   }, [pdfUrl]);

//   return <canvas ref={canvasRef} />;
// };

// export default PDFViewer;