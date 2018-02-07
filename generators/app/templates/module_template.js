define ('<%= moduleName %>'
,   [
        '<%= moduleName %>.Router'
    ]
, function (
        <%= moduleName %>Router
    )
{
    'use strict';

    return {

        mountToApp: function(application)
        {
            console.log('ENTER <%= moduleName %> MTA --------------');
            return new <%= moduleName %>Router(application);
        }

    };
});
