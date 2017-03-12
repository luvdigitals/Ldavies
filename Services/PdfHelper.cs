using System;
using System.Collections.Generic;

using Umbraco.Core;
using System.IO;
using iTextSharp.text;
using iTextSharp.text.pdf;

namespace ldavies.Services
{
    public class PdfHelper
    {
        public static string GetMediaPath(string mediaId)
        {
            var media = ApplicationContext.Current.Services.MediaService.GetById(Convert.ToInt32(mediaId));
            string filepath = media.GetValue("umbracoFile").ToString();
            return filepath;
        }

        public static MemoryStream Merge(List<String> InFiles)
        {
            MemoryStream stream = new MemoryStream();
            using (Document doc = new Document())
            using (PdfCopy pdf = new PdfCopy(doc, stream))
            {
                doc.Open();               
                PdfReader reader = null;
                PdfImportedPage page = null;

                InFiles.ForEach(file =>
                {
                    reader = new PdfReader(file);

                    for (int i = 0; i < reader.NumberOfPages; i++)
                    {
                        page = pdf.GetImportedPage(reader, i + 1);
                        pdf.AddPage(page);
                    }                    
                    pdf.FreeReader(reader);
                    reader.Close();
                });
            }
            return stream;
        }
    }
}