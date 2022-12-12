import React, { useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { saveAs } from "file-saver"; // import the `saveAs` function

const InvoiceDownloader = () => {
  const invoiceRef = useRef(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = useCallback(() => {
    setIsDownloading(true);

    // get the HTML of the invoice
    const invoice = invoiceRef.current;
    const invoiceHtml = invoice.outerHTML;

    // create a blob with the HTML and the correct MIME type
    const blob = new Blob([invoiceHtml], { type: "text/html" });

    // allow the user to download the invoice as a file
    saveAs(blob, "invoice.html");

    setIsDownloading(false);
  });

  return createPortal(
    <button onClick={handleDownload}>
      {isDownloading ? "Downloading..." : "Download Invoice"}
    </button>,
    document.body
  );
};

export default InvoiceDownloader;
