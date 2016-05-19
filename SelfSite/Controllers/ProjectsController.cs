using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SelfSite.Controllers
{
    public class ProjectsController : Controller
    {
        public ActionResult GitHubCoach()
        {
            return this.View();
        }
    }
}