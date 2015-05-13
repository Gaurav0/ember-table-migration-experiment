import Ember from "ember";
import BodyTableContainer from "ember-table/views/body-table-container";
import ColumnDefinition from "ember-table/models/column-definition";
import ColumnSortableIndicator from "ember-table/views/column-sortable-indicator";
import EmberTableComponent from "ember-table/components/ember-table";
import FooterTableContainer from "ember-table/views/footer-table-container";
import HeaderBlock from "ember-table/views/header-block";
import HeaderCell from "ember-table/views/header-cell";
import HeaderRow from "ember-table/views/header-row";
import HeaderTableContainer from "ember-table/views/header-table-container";
import LazyContainerBlock from "ember-table/views/lazy-table-block";
import Row from "ember-table/views/table-row";
import RowArrayContainer from "ember-table/controllers/row-array";
import ScrollContainer from "ember-table/views/scroll-container";
import ScrollPanel from "ember-table/views/scroll-panel";
import ShowHorizontalScrollMixin from "ember-table/mixins/show-horizontal-scroll";
import TableBlock from "ember-table/views/table-block";
import TableCell from "ember-table/views/table-cell";
import TableContainer from "ember-table/views/table-container";
import TableRow from "ember-table/views/table-row";

Ember.Table = Ember.Namespace.create({
  BodyTableContainer: BodyTableContainer,
  ColumnDefinition: ColumnDefinition,
  ColumnSortableIndicator: ColumnSortableIndicator,
  EmberTableComponent: EmberTableComponent,
  FooterTableContainer: FooterTableContainer,
  HeaderBlock: HeaderBlock,
  HeaderCell: HeaderCell,
  HeaderRow: HeaderRow,
  HeaderTableContainer: HeaderTableContainer,
  LazyContainerBlock: LazyContainerBlock,
  Row: Row,
  RowArrayContainer: RowArrayContainer,
  ScrollContainer: ScrollContainer,
  ScrollPanel: ScrollPanel,
  ShowHorizontalScrollMixin: ShowHorizontalScrollMixin,
  TableBlock: TableBlock,
  TableContainer: TableContainer,
  TableRow: TableRow
});

export default Ember.Table;
