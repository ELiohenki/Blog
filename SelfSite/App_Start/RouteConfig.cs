using System.Web.Mvc;
using System.Web.Routing;

namespace SelfSite
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "Projects",
                url: "Projects",
                defaults: new { controller = "Projects", action = "Index", id = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "SpecificProject",
                url: "Projects/{action}",
                defaults: new { controller = "Projects", action = "Index", id = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "Blog",
                url: "blog",
                defaults: new { controller = "Home", action = "blog" }
            );
        }
    }
}
