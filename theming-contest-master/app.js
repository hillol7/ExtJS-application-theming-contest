/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'FeedViewer',
    extend: 'FeedViewer.Application',
    
    requires: [
        'FeedViewer.*'
    ],

    // The name of the initial view to create. With the classic toolkit this class
    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
    // modern toolkit, the main view will be added to the Viewport.
    //
    mainView: 'FeedViewer.view.main.Main',
	launch: function () {
          // <debug>
          try {
              SenchaInspector.init();
              /**
               * if you connected app.json via a machine name or IP address,
               * you'll need to configure that here too
               */
              // SenchaInspector.init('http://MyComputerName:3000');
          } catch (e) {}
          // </debug>
      }

    //-------------------------------------------------------------------------
    // Most customizations should be made to FeedViewer.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});
