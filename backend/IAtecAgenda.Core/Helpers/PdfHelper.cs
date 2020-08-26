using PdfSharp.Pdf;
using PdfSharp.Pdf.IO;
using System;
using System.Collections.Generic;
using System.IO;
using TheArtOfDev.HtmlRenderer.PdfSharp;

namespace IAtecAgenda.Core.Helpers
{
    public static class PdfHelper
    {
        public static PdfDocument Generate(string template, IDictionary<string, string> tags)
        {
            foreach (var item in tags)
                template = template.Replace(item.Key, item.Value);

            return PdfGenerator.GeneratePdf(template, PdfSharp.PageSize.A4);
        }

        public static PdfDocument Merge(List<PdfDocument> pdfs)
        {
            var combinedPdf = new PdfDocument();
            foreach (var item in pdfs)
            {
                var pdfForImport = ImportPdfDocument(item);
                combinedPdf.Pages.Add(pdfForImport.Pages[0]);
            }
            return combinedPdf;
        }

        public static byte[] ConvertByte(PdfDocument pdf)
        {
            byte[] result = null;
            using (var ms = new MemoryStream())
            {
                pdf.Save(ms);
                result = ms.ToArray();
            }
            return result;
        }


        #region Private Methods
        private static PdfDocument ImportPdfDocument(PdfDocument pdf1)
        {
            using (var stream = new MemoryStream())
            {
                pdf1.Save(stream, false);
                stream.Position = 0;
                var result = PdfReader.Open(stream, PdfDocumentOpenMode.Import);
                return result;
            }
        }

        #endregion
    }
}
