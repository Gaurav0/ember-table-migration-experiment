import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    var generatedContent = [];
    for (var i = 0; i < 100; i++) {
      var date = new Date();
      date.setDate(date.getDate() + i);
      generatedContent.push({
        date: date,
        open:  Math.random() * 100,
        high:  Math.random() * 100 + 50,
        low:   Math.random() * 100 - 50,
        close: Math.random() * 100
      });
    }
    return generatedContent;
  }
});
