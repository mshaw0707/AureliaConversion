//define(['plugins/router', 'durandal/app'], function (router, app) {
//    return {
//        router: router,
//        search: function() {
//            //It's really easy to show a message box.
//            //You can add custom options too. Also, it returns a promise for the user's response.
//            app.showMessage('Search not yet implemented...');
//        },
//        activate: function () {
//            router.map([
//                { route: '', title:'Welcome', moduleId: 'viewmodels/welcome', nav: true },
//                { route: 'flickr', moduleId: 'viewmodels/flickr', nav: true }
//            ]).buildNavigationModel();
            
//            return router.activate();
//        }
//    };
//});

export class Shell {
    configureRouter(routeConfig, router) {
        routeConfig.map([
            { route: '/', moduleId: 'app/welcome', title: 'Welcome', href: '#welcome', nav: true },
            { route: '/flickr', moduleId: 'app/flickr', title: 'Flickr', href: '#flickr', nav: true }
        ]);

        this.router = router;
    }

    search() {

    }
}