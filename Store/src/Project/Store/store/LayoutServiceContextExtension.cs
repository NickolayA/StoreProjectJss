using System;
using System.Linq;
using Sitecore;
using Sitecore.Diagnostics;
using Sitecore.LayoutService.ItemRendering.Pipelines.GetLayoutServiceContext;

namespace Store.Project.Store
{
    public class LayoutServiceContextExtension : IGetLayoutServiceContextProcessor
    {
        public void Process(GetLayoutServiceContextArgs args)
        {
            Assert.ArgumentNotNull(args, nameof(args));

            try
            {
                if (Context.Item == null) return;

                if (args.ContextData.ContainsKey("site") || Context.Site == null)
                {
                    return;
                }

                args.ContextData.Add("site", new
                {
                    name = Context.Site.Name,
                    language = Context.Site.Language,
                    targetHostName = $"{Context.HttpContext.Request.Url.Scheme}://{Context.Site.TargetHostName}",
                    availableLanguages = Sitecore.Context.Item.Languages.Select(lang => lang.ToString()).ToList()
                });
            }
            catch (Exception ex)
            {
                Log.Error($"An error occurred in {nameof(Process)} with Message {ex.Message} \n\r SkT {ex.StackTrace}", this);
            }
        }
    }
}