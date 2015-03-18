using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SelfSite.Startup))]
namespace SelfSite
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
