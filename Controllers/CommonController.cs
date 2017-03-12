using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
using PdfSharp;
using ldavies.Services;
using PdfSharp.Pdf;
using System.IO;

namespace ldavies.Controllers
{
    public class CommonController : Umbraco.Web.Mvc.SurfaceController
    {
        [HttpPost]
        [ActionName("MemberLogin")]
        public ActionResult MemberLoginPost(string userName, string password)
        {
            if (Membership.ValidateUser(userName, password))
            {
                FormsAuthentication.SetAuthCookie(userName, true);
                return RedirectToUmbracoPage(1139); // Broucher- download page

            }
            else
            {
                return RedirectToCurrentUmbracoUrl();
            }
        }

        public ActionResult GeneratePdf(string name, string pdfs)
        {
            string[] pdfsList = pdfs.Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries);
            List<string> pdfPaths = new List<string>();
            if(pdfsList.Length <= 0)
            {
                return RedirectToCurrentUmbracoUrl();
            }

            pdfPaths.Add(Server.MapPath(PdfHelper.GetMediaPath("1193"))); // Front Cover page
            for (int i = 0; i < pdfsList.Length; i++)
            {
                pdfPaths.Add(Server.MapPath(PdfHelper.GetMediaPath(pdfsList[i])));
            }
            pdfPaths.Add(Server.MapPath(PdfHelper.GetMediaPath("1192"))); // Back cover page

            using (MemoryStream stream = new MemoryStream(PdfHelper.Merge(pdfPaths).ToArray()))
            {
                Response.AddHeader("content-length", stream.Length.ToString());
                return File(stream.ToArray(), "application/pdf", name);
            }
        }
    }
}