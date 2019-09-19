import React from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
// import LumensRates from '../shared/LumensRates'

class Footer extends React.PureComponent {
  render() {
    return (
      <Grid id="footer">
        <Row>
          <Col md={3}>
            {
              // Disable rates for now, it doesn't refresh correctly: <LumensRates/>
            }
          </Col>
        </Row>
        <Row>
        </Row>
        <Row>
        </Row>
      </Grid>
    )
  }
}

export default Footer
