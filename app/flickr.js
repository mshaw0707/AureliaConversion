define(['aurelia-http-client', 'aurelia-dialog'], function (aureliaHttp, aureliaDialog) {
   //Note: This module exports an object.
   //That means that every module that "requires" it will get the same object instance.
   //If you wish to be able to create multiple instances, instead export a function.
   //See the "welcome" module for an example of function export.

   var ctor = function (http, dialog) {
       this.displayName = 'Flickr';
       this.images = ko.observableArray([]);
       this.dialog = dialog;
       this.activate = function () {
           //the router's activator calls this function and waits for it to complete before proceeding
           if (this.images().length > 0) {
               return;
           }

        http.createRequest('http://api.flickr.com/services/feeds/photos_public.gne')
            .asJsonp()
            .withParams({ tags: 'mount ranier', tagmode: 'any', format: 'json' })
            .withCallbackParameterName('jsoncallback')
            .send()
            .then(data => this.images(data.response.items));
       };
       this.select = function(item) {
           //the app model allows easy display of modal dialogs by passing a view model
           //views are usually located by convention, but you an specify it as well with viewUrl
            return this.dialog.open({ viewModel: 'app/detail', model: item });

       };
       this.canDeactivate = function () {
           //the router's activator calls this function to see if it can leave the screen
           //return app.showMessage('Are you sure you want to leave this page?', 'Navigate', ['Yes', 'No']);
           return true;
       };
   };

   ctor.inject = [aureliaHttp.HttpClient, aureliaDialog.DialogService];
   return ctor;
});