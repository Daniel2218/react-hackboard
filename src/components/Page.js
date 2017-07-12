import React from "react";
import ReactDOM from "react-dom";
import PageSection from "./PageSection.js";
import Stat from "./Stat.js";
import Table from "./Table.js";
import TableHeader from "./TableHeader.js";
import Modal from "./Modal.js";

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      showModal: false
    };
  }

  toggleModal() {
    this.setState((prevState) => ({
      showModal: !prevState.showModal
    }));
  }

  getTableHeaders() {
    var currentPage = this.props.currentPage;
    var th = [];

    if(currentPage === "Applications") {
      th = ["Applicant ID","First Name","Last Name","Hacks","Status"];
    } else if (currentPage === "Prizes") {
      th = ["Name","Description","Obtained By","Donated By"];
    } else if (currentPage === "Sponsors") {
      th = ["Name","Email","Phone","Donation Amount","Donation Recieved"];
    } else if (currentPage === "Users") {
      th = ["Name","Email","Phone","Postion"];
    }
    return th;
  }

  render() {
    const currentPage = this.props.currentPage;
    const tableHeaders = this.getTableHeaders();
    var page = "";

    if (currentPage === "Schedule") {
      page = <PageSection currentPage={this.props.currentPage}>
              </PageSection>;
    } else {
      page = <PageSection currentPage={this.props.currentPage}>
                <TableHeader currentPage={this.props.currentPage}
                             onButtonClick={this.toggleModal} />
                <Table currentPage={this.props.currentPage}
                       tableHeaders={tableHeaders} />
                {this.state.showModal
                 && <Modal tableHeaders={tableHeaders}
                          toggleModal={this.toggleModal}/>}
              </PageSection>;
    }
    return page;
  }
}

export default Page;
