import Ember from "ember";
import columnDefinition from "ember-table/models/column-definition";

Ember.Table = Ember.Namespace.create({
  ColumnDefinition: columnDefinition
});

export default Ember.Table;
