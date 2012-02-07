beforeEach(function() {
  initializeBackboneHistory();
  // this.addMatchers({
  //   toBePlaying: function(expectedSong) {
  //     var player = this.actual;
  //     return player.currentlyPlayingSong === expectedSong && 
  //            player.isPlaying;
  //   }
  // });
});

var context = describe;

function initializeBackboneHistory() {
  // Backbone.history gets lazy loaded when routes are created
  window.Backbone.history ||
    (window.Backbone.history = new Backbone.History);
}
