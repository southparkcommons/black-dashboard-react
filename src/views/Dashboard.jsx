/*!
=========================================================
* Dashboard SPC v1.0.0
=========================================================
*/

// global
import React from "react";
import classNames from "classnames";
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // UncontrolledDropdown,
  // Label,
  // FormGroup,
  // Input,
  // Table,
  Row,
  Col,
  // UncontrolledTooltip
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4
} from "variables/charts.jsx";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1"
    };
  }
  
  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };
  
  render() {
    const { data: { loading, applicants } } = this.props;
    if (loading) {
      return <div></div>;
    }
    var total_applicants = 0;
    if (applicants && typeof applicants !== 'undefined') {
      const newApplicants = applicants.filter(applicant => applicant['Status'] === 'New');
      console.log(newApplicants);
      newApplicants.forEach((_, applicant)=>{
        total_applicants += 7 * Number(applicant);
      });
      total_applicants = total_applicants/newApplicants.length;
    }
    else {
      total_applicants = 7;
    }

    console.log(total_applicants);
    return (
        <>
          <div className="content">
            <Row>
              <Col xs="12">
                <Card className="card-chart">
                  <CardHeader>
                    <Row>
                      <Col className="text-left" sm="6">
                        <h5 className="card-category">Applicants' Days Old</h5>
                        <CardTitle tag="h2">{total_applicants}</CardTitle>
                      </Col>
                      <Col sm="6">
                        <ButtonGroup
                          className="btn-group-toggle float-right"
                          data-toggle="buttons"
                        >
                          <Button
                            tag="label"
                            className={classNames("btn-simple", {
                              active: this.state.bigChartData === "data1"
                            })}
                            color="info"
                            id="0"
                            size="sm"
                            onClick={() => this.setBgChartData("data1")}
                          >
                            <input
                              defaultChecked
                              className="d-none"
                              name="options"
                              type="radio"
                            />
                            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                              Applicants
                            </span>
                            <span className="d-block d-sm-none">
                              <i className="tim-icons icon-single-02" />
                            </span>
                          </Button>
                          {/* <Button
                            color="info"
                            id="2"
                            size="sm"
                            tag="label"
                            className={classNames("btn-simple", {
                              active: this.state.bigChartData === "data3"
                            })}
                            onClick={() => this.setBgChartData("data3")}
                          >
                            <input
                              className="d-none"
                              name="options"
                              type="radio"
                            />
                            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                              Sessions
                            </span>
                            <span className="d-block d-sm-none">
                              <i className="tim-icons icon-tap-02" />
                            </span>
                          </Button> */}
                        </ButtonGroup>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <div className="chart-area">
                      <Line
                        data={chartExample1[this.state.bigChartData]}
                        options={chartExample1.options}
                      />
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col lg="4">
                <Card className="card-chart">
                  <CardHeader>
                    <h5 className="card-category">Number of Pictures</h5>
                    <CardTitle tag="h3">
                      <i className="tim-icons icon-bell-55 text-info" />{" "}
                      43
                    </CardTitle>
                  </CardHeader>
                  <CardBody>
                    <div className="chart-area">
                      <Line
                        data={chartExample2.data}
                        options={chartExample2.options}
                      />
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="4">
                <Card className="card-chart">
                  <CardHeader>
                    <h5 className="card-category">Event attendance</h5>
                    <CardTitle tag="h3">
                      <i className="tim-icons icon-send text-success" /> 25
                    </CardTitle>
                  </CardHeader>
                  <CardBody>
                    <div className="chart-area">
                      <Line
                        data={chartExample4.data}
                        options={chartExample4.options}
                      />
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="4">
                <Card className="card-chart">
                  <CardHeader>
                    <h5 className="card-category">Social Media Visualizations</h5>
                    <CardTitle tag="h3">
                      <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                      1,500
                    </CardTitle>
                  </CardHeader>
                  <CardBody>
                    <div className="chart-area">
                      <Bar
                        data={chartExample3.data}
                        options={chartExample3.options}
                      />
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </>
    );
  }
}

// export default Dashboard;

Dashboard.propTypes = {
  /** The graphql request for team members */
  data: PropTypes.object.isRequired,
};

export default graphql(gql`
  query ApplicantsQuery {
    applicants {
      Name,
      Email,
      WeeksOld,
      Status,
    }
  }
`)(Dashboard);
