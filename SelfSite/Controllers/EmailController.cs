using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SelfSite.Controllers
{
    using System.Net;
    using System.Net.Mail;

    using SelfSite.Model;

    public class EmailController : Controller
    {
        [HttpPost]
        public ActionResult Send(string from, string subject, string body)
        {
            try
            {

                using (var context = new DBDataContext())
                {
                    var smtpSettings = context.SmtpSettings.First();
                    var fromAddress = new MailAddress(smtpSettings.UserName, from);
                    var toAddress = new MailAddress(smtpSettings.To, "Sir Yauheni Liohenki");
                    var fromPassword = smtpSettings.Password;

                    var smtp = new SmtpClient
                                   {
                                       Host = "smtp.gmail.com",
                                       Port = 587,
                                       EnableSsl = true,
                                       DeliveryMethod = SmtpDeliveryMethod.Network,
                                       UseDefaultCredentials = false,
                                       Credentials = new NetworkCredential(fromAddress.Address, fromPassword)
                                   };
                    using (var message = new MailMessage(fromAddress, toAddress) { Subject = subject, Body = body })
                    {
                        smtp.Send(message);
                    }
                }
            }
            catch (Exception ex)
            {

                Elmah.ErrorSignal.FromCurrentContext().Raise(ex);
            }
            return new EmptyResult();
        }
    }
}