using System.Web;
using System.Web.Optimization;

namespace SelfSite
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/libs/modernizr/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/libs").Include(
                      "~/Scripts/libs/bootstrap/bootstrap.js",
                      "~/Scripts/libs/bootstrap/respond.js",
                      "~/Scripts/libs/modernizr/modernizr-*",
                      "~/Scripts/libs/isotope/isotope.pkgd.js",
                      "~/Scripts/libs/jquery/jquery-{version}.js",
                      "~/Scripts/libs/jquery/jquery.validate*",
                      "~/Scripts/libs/photoswipe/photoswipe.js",
                      "~/Scripts/libs/photoswipe/photoswipe-ui.js"));

            bundles.Add(new ScriptBundle("~/bundles/expertisegrid").Include(
                      ).Include("~/Scripts/filterGrids.js").Include(
                      "~/Scripts/main.js",
                      "~/Scripts/portfolioPreview.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/Styles/bootstrap.css",
                      "~/Content/Styles/bootstrap-theme.css",
                      "~/Content/Styles/font-awesome.css",
                      "~/Content/Styles/photoswipe.css",
                      "~/Content/Styles/photoswipe-skin.css"));

            bundles.Add(new ScriptBundle("~/bundles/blogModule").Include(
                      "~/Scripts/libs/Angular/angular.js",
                      "~/Scripts/types.js",
                      "~/Scripts/blog/*.js"));
        }
    }
}
