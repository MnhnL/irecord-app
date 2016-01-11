define([
  'marionette',
  'log',
  'app',
  'common/record_manager',
  'common/user_model',
  './list/controller',
  './show/controller',
  './edit/controller',
  './edit_attr/controller',
  'common/location/controller',
  'common/taxon/controller'
], function(Marionette, log, app, recordManager, userModel, ListController, ShowController, EditController,
            EditAttrController, LocationController, TaxonController) {
  app.records = {};

  app.records.Router = Marionette.AppRouter.extend({
    routes: {
      "records": ListController.show,
      "records/new": TaxonController.show,
      "records/:id": ShowController.show,
      "records/:id/edit": EditController.show,
      "records/:id/edit/location": LocationController.show,
      "records/:id/edit/taxon": TaxonController.show,
      "records/:id/edit/:attr": EditAttrController.show,
      "records/*path": function () {app.trigger('404:show')}
    }
  });

  let syncRecords = function () {
    if (window.navigator.onLine && userModel.hasLogIn() && userModel.get('autosync')) {
      recordManager.syncAll(function (sample) {
        userModel.appendSampleUser(sample);
        sample.set('location', '51.6049249,-1.0672276');
      });
    }
  };

  app.on("records:list", function(options) {
    app.navigate('records', options);
    ListController.show(  );
  });

  app.on("records:show", function(id, options) {
    app.navigate('records/' + id, options);
    ShowController.show(id);
  });

  app.on("records:edit", function(id, options) {
    app.navigate('records/' + id + '/edit', options);
    EditController.show(id);
  });

  app.on("records:edit:saved", function(recordID) {
    syncRecords();
  });

  app.on("records:edit:attr", function(id, attrID, options) {
    app.navigate('records/' + id + '/edit/' + attrID, options);
    switch (attrID){
      case 'location':
        LocationController.show(id);
        break;
      case 'taxon':
        TaxonController.show(id);
        break;
      default:
        EditAttrController.show(id, attrID);
    }
  });

  app.on("records:new", function(options) {
    app.navigate('records/new', options);
    EditController.show();
  });

  app.on("records:new:attr", function(attrID, options) {
    app.navigate('records/new/' + attrID, options);
    switch (attrID) {
      case 'location':
        LocationController.show();
        break;
      case 'taxon':
        TaxonController.show();
        break;
      default:
        EditAttrController.show(null, attrID);
    }
  });

  app.on('before:start', function(){
    new app.records.Router();
    syncRecords();
  });




});
