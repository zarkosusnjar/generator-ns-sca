define ('<%= moduleName %>.Router'
,   [
        'Backbone'
    ,   '<%= moduleName %>.View'
    ]
,   function (
        Backbone
    ,   <%= moduleName %>View
    )
{
    'use strict';

    return Backbone.Router.extend({
        
        routes:
        {
            '<%= moduleName %>': '<%= moduleName %>'
        }

    ,   initialize: function(application)
        {
            this.application  = application;
        }

    ,   <%= moduleName %>: function()
        {
            console.log('ENTER <%= moduleName %> ROUTER --------------');

            var view;

            view = new <%= moduleName %>View({application: this.application});
            view.showContent();
        }

    });
});
