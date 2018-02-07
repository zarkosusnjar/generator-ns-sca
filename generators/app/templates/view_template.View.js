define ('<%= moduleName %>.View'
,   [
        'Backbone'
    ,   '<%= moduleName %>.tpl'
    ]
,   function (
        Backbone
    ,   <%= moduleName %>_tpl
    )
{
    'use strict';
    
    return Backbone.View.extend({

        template: <%= moduleName %>_tpl

    // ,   initialize: function()
    //     {
    //         console.log('ENTER <%= moduleName %> VIEW; INITIALIZE --------------');
    //     }
    //
    // ,   getContext: function()
    //     {
    //         console.log('ENTER <%= moduleName %> VIEW: GET CONTEXT --------------');
    //     }

    });
});
