import React from 'react'
import Nav from 'react-bootstrap/lib/Nav'
import Navbar from 'react-bootstrap/lib/Navbar'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import NavItem from 'react-bootstrap/lib/NavItem'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import {Link} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import {FormattedMessage, injectIntl} from 'react-intl'

import LanguageSelector from './LanguageSelector'
import NetworkSelector from './NetworkSelector'
import logoImg from '../../img/logo.png'

class Header extends React.Component {
  render() {
    const {formatMessage} = this.props.intl
    return (
      <Navbar fluid fixedTop collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <img
                src={logoImg}
                className="App-logo"
                alt={formatMessage({id: 'logo'})}
              />
              <span className="brand-text">explorer</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
         
          <Nav>
            {/* <LinkContainer to="/graphs">
              <NavItem>Graphs (beta)</NavItem>
            </LinkContainer> */}
            <LinkContainer to="/operations">
              <NavItem>
                <FormattedMessage id="operations" />
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/txs">
              <NavItem>
                <FormattedMessage id="transactions" />
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/ledgers">
              <NavItem>
                <FormattedMessage id="ledgers" />
              </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default injectIntl(Header)
