import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import AddDisease from './modal/AddDisease';
import DiseaseService from '../../services/DiseaseService';

const disease_service = new DiseaseService();

class Disease extends Component {

    constructor(props) {
        super(props);
        this.state = { diseases: [] };
    }

    componentDidMount() {
        var self = this;
        disease_service.getDisease()
            .then(function(result) {
                console.log(result);
                self.setState({ diseases: result });
            }).catch(error => {
                console.log('Error ' + error.response);
            });
    }

    render() {
        return (
            <>
                <div className="page_title">
                    <div className="card">
                        <Row>
                            <Col md={8}>
                                <div className="card-body">Disease Page</div>
                            </Col>
                            <Col className="text-right" md={4}>
                                <div className="card-body">
                                    <a href="/">Dashboard</a> <FeatherIcon icon="chevrons-right" /> Disease List
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="page-container m-2 p-2">
                    <div className="data_table_list">
                        <div className="text-right">
                            <button data-toggle="modal" data-target="#open-modal" className="btn btn-info btn-sm mb-3"><FeatherIcon icon="plus" /></button>
                            <AddDisease />
                        </div>
                        <div className="shadow table_custom_class">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Disease Name</th>
                                        <th>Disease Flag</th>
                                        <th className="text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {this.state.diseases.map(disease => (
                                        <tr key={disease.id}>
                                            <td>#{disease.id}</td>
                                            <td>{disease.name}</td>
                                            <td>
                                                <img src={disease.disease_image} alt="{disease.disease_name}" />
                                            </td>
                                            <td className="text-right">
                                                <button className="btn btn-info btn-sm"><FeatherIcon icon="edit-3" /></button>
                                                <button className="btn btn-danger btn-sm ml-2"><FeatherIcon icon="trash" /></button>
                                            </td>
                                        </tr>
                                    ))} */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Disease;