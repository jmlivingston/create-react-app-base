import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { Modal, ModalHeader, ModalBody } from 'components/Common'
import APP from 'config/appConstants'
import TermsConditions from 'components/TermsConditions/TermsConditions'

class Footer extends Component {
  state = {
    isTermsConditionsModalOpen: false
  }

  static propTypes = {
    strings: PropTypes.object.isRequired
  }

  toggleTermsConditionsModal() {
    this.setState(prevState => ({
      isTermsConditionsModalOpen: !prevState.isTermsConditionsModalOpen
    }))
  }

  render() {
    const date = new Date()
    return (
      <div className="footer">
        <div className="container-fluid bg-dark text-center text-light py-3">
          &copy; {date.getFullYear() - 1}-{date.getFullYear()} {APP.COMPANY_NAME} {this.props.strings.copyrightSuffix} |
          Version {process.env.REACT_APP_VERSION} |&nbsp;
          <span className="cursor-pointer" onClick={() => this.toggleTermsConditionsModal()}>
            {this.props.strings.termsConditions}
          </span>
          <Modal isOpen={this.state.isTermsConditionsModalOpen} toggle={() => this.toggleTermsConditionsModal()}>
            <ModalHeader toggle={() => this.toggleTermsConditionsModal()}>
              {this.props.strings.termsConditions}
            </ModalHeader>
            <ModalBody>
              <TermsConditions />
            </ModalBody>
          </Modal>
        </div>
      </div>
    )
  }
}

export default Footer
