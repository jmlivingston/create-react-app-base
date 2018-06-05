// import PropTypes from 'prop-types'
import React, { Fragment, PureComponent } from 'react'

import { Button, Row } from 'components/Common'
import { GlobalContainer } from 'components/Global/GlobalContainer'
import StyleGuideSection from './StyleGuideSection'
import styleGuideConfig from 'strings/styleGuide/styleGuide.en.json'
import ThemeSelector from 'components/Global/ThemeSelector'

import './StyleGuideApp.scss'

class StyleGuideAppGrouped extends PureComponent {
  state = {
    rootKey: Object.keys(styleGuideConfig)[0]
  }
  render() {
    return (
      <GlobalContainer>
        <Row>
          <div className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky py-2">
              <ThemeSelector />
              <br />
              {Object.keys(styleGuideConfig).map(rootKey => (
                <Fragment key={rootKey}>
                  <h5>
                    <Button
                      onClick={() => this.setState({ rootKey })}
                      active={this.state.rootKey === rootKey}
                      color={this.state.rootKey === rootKey ? 'link' : 'link'}
                      size="sm">
                      {this.state.rootKey === rootKey ? <strong>{rootKey}</strong> : <Fragment>{rootKey}</Fragment>}
                    </Button>
                  </h5>
                </Fragment>
              ))}
            </div>
          </div>
          <div className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <StyleGuideSection rootKey={this.state.rootKey} />
          </div>
        </Row>
      </GlobalContainer>
    )
  }
}

export default StyleGuideAppGrouped
