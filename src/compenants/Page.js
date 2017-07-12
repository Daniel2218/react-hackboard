import React from "react";
import ReactDOM from "react-dom";
import PageSection from "../compenants/PageSection.js";
import Stat from "../compenants/Stat.js";
import Table from "../compenants/Table.js";
import TableHeader from "../compenants/TableHeader.js";

class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var page = "";

    if(this.props.currentPage === "Applications") {
      page = <PageSection currentPage={this.props.currentPage}>
                <Stat />
                <TableHeader currentPage={this.props.currentPage} />
                <Table headers={this.props.headers}/>
              </PageSection>;
    } else {
      page = <PageSection currentPage={this.props.currentPage}>
                <TableHeader currentPage={this.props.currentPage} />
                <Table headers={this.props.headers}/>
              </PageSection>;
    }
    return page;
  }
}

export default Page;
