import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export async function downloadTicketPDF(filename = "ticket.pdf") {
  const ticket = document.getElementById("ticket");

  if (!ticket) {
    console.warn("Ticket element not found");
    return;
  }

  const canvas = await html2canvas(ticket, { scale: 2 });
  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p", "mm", "a4");
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const imgProps = pdf.getImageProperties(imgData);
  const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

  pdf.addImage(imgData, "PNG", 0, 10, pdfWidth, pdfHeight);
  pdf.save(filename);
}
