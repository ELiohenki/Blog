using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SelfSite.Controllers
{
    public class ProjectsController : Controller
    {
        public ActionResult Index()
        {
            return this.View();
        }
        public ActionResult GitHubCommitNotifier()
        {
            return this.View();
        }
    }
}