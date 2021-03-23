import React from 'react'

import { Col, Row } from 'react-bootstrap'

export default props => (
    <div className="my-3">
        <Row>
            <Col md={12}>
                <h1>{props.title} <span className="lead">{props.subtitle}</span> </h1>
                <hr />
            </Col>
            <Col md={12}>
                {props.children}
            </Col>
        </Row>
    </div>
)