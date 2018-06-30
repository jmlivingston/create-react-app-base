import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import { Modal, ModalHeader, ModalBody } from '@myorg/components-common'
import APP from 'config/appConstants'
import TermsConditions from 'components/TermsConditions/TermsConditions'

class Footer extends PureComponent {
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
        <div className="container-fluid text-center py-3">
          &copy; {date.getFullYear() - 1}-{date.getFullYear()} {APP.COMPANY_NAME} {this.props.strings.copyrightSuffix} |
          {this.props.strings.version} {process.env.REACT_APP_VERSION} |&nbsp;
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
