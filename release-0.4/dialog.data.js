window.source = {
  "title": "Dialog",
  "url": "dialog.html",
  "type": "js",
  "content": "import React, {Component} from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames';\nimport Portal from '@jetbrains/react-portal';\n\nimport {AdaptiveIsland} from '../island/island';\nimport getUID from '../global/get-uid';\nimport {CloseIcon} from '../icon/icons';\nimport Shortcuts from '../shortcuts/shortcuts';\nimport TabTrap from '../tab-trap/tab-trap';\n\nimport ScrollPreventer from './dialog__body-scroll-preventer';\nimport styles from './dialog.css';\n\nfunction PortalPropsCleaner({children}) {\n  return children;\n}\n\n/**\n * @name Dialog\n * @category Components\n * @framework React\n * @constructor\n * @description The Dialog component is a simple way to present content above an enclosing view.\n * @example-file ./dialog.examples.html\n */\n\nexport default class Dialog extends Component {\n  static propTypes = {\n    className: PropTypes.string,\n    contentClassName: PropTypes.string,\n    children: PropTypes.oneOfType([\n      PropTypes.arrayOf(PropTypes.node),\n      PropTypes.node\n    ]),\n    show: PropTypes.bool.isRequired,\n    showCloseButton: PropTypes.bool,\n    onOverlayClick: PropTypes.func,\n    onEscPress: PropTypes.func,\n    onCloseClick: PropTypes.func,\n    // onCloseAttempt is a common callback for ESC pressing and overlay clicking.\n    // Use it if you don't need different behaviors for this cases.\n    onCloseAttempt: PropTypes.func,\n    // focusTrap may break popups inside dialog, so use it carefully\n    trapFocus: PropTypes.bool,\n    autoFocusFirst: PropTypes.bool\n  };\n\n  static defaultProps = {\n    onOverlayClick: () => {},\n    onEscPress: () => {},\n    onCloseClick: () => {},\n    onCloseAttempt: () => {},\n    showCloseButton: false,\n    trapFocus: false,\n    autoFocusFirst: true,\n    'data-test': 'ring-dialog-container'\n  };\n\n  state = {\n    shortcutsScope: getUID('ring-dialog-')\n  };\n\n  handleClick = event => {\n    if (event.target !== this.dialog) {\n      return;\n    }\n    this.props.onOverlayClick(event);\n    this.props.onCloseAttempt(event);\n  };\n\n  onCloseClick = event => {\n    this.props.onCloseClick(event);\n    this.props.onCloseAttempt(event);\n  };\n\n  getShortcutsMap = () => {\n    const onEscape = event => {\n      if (this.props.show) {\n        this.props.onEscPress(event);\n        this.props.onCloseAttempt(event);\n      }\n    };\n\n    return {\n      esc: onEscape\n    };\n  };\n\n  dialogRef = tabTrap => {\n    this.dialog = tabTrap && tabTrap.node;\n  };\n\n  render() {\n    // eslint-disable-next-line no-unused-vars, max-len\n    const {show, showCloseButton, autoFocusFirst, onOverlayClick, onCloseAttempt, onEscPress, onCloseClick, children, className, contentClassName, trapFocus, ...restProps} = this.props;\n    const classes = classNames(styles.container, className);\n    const shortcutsMap = this.getShortcutsMap();\n\n    return (\n      <Portal\n        isOpen={show}\n        onOpen={ScrollPreventer.prevent}\n        onClose={ScrollPreventer.reset}\n      >\n        <PortalPropsCleaner>\n          <TabTrap\n            trapDisabled={!trapFocus}\n            autoFocusFirst={autoFocusFirst}\n            data-test=\"ring-dialog-container\"\n            ref={this.dialogRef}\n            className={classes}\n            onClick={this.handleClick}\n            {...restProps}\n          >\n            <Shortcuts\n              map={shortcutsMap}\n              scope={this.state.shortcutsScope}\n            />\n            <AdaptiveIsland\n              className={classNames(styles.content, contentClassName)}\n              data-test=\"ring-dialog\"\n            >\n              {children}\n              {showCloseButton &&\n              (\n                <button\n                  type=\"button\"\n                  data-test=\"ring-dialog-close-button\"\n                  className={styles.closeButton}\n                  onClick={this.onCloseClick}\n                >\n                  <CloseIcon/>\n                </button>\n              )\n              }\n            </AdaptiveIsland>\n          </TabTrap>\n        </PortalPropsCleaner>\n      </Portal>\n    );\n  }\n}\n",
  "examples": [
    {
      "name": "Dialog",
      "url": "examples/dialog/dialog.html",
      "disableAutoSize": true,
      "files": [
        {
          "type": "html",
          "content": "\n<div class=\"long-page\">\n\n  <div id=\"dialog\"></div>\n</div>\n  ",
          "showCode": true
        },
        {
          "type": "css",
          "content": "\n:global(.long-page) {\n  height: 2000px;\n}\n  ",
          "showCode": true
        },
        {
          "type": "js",
          "content": "\nimport {render} from 'react-dom';\nimport React from 'react';\n\nimport Dialog from '@jetbrains/ring-ui/components/dialog/dialog';\nimport {Header, Content} from '@jetbrains/ring-ui/components/island/island';\nimport Button from '@jetbrains/ring-ui/components/button/button';\nimport Panel from '@jetbrains/ring-ui/components/panel/panel';\n\nclass DialogDemo extends React.Component {\n  state = {\n    show: true\n  };\n\n  doAction = () => {\n    alert('action performed');\n    this.setState({show: false});\n  }\n\n  cancelDialog = () => {\n    this.setState({show: false});\n  }\n\n  render() {\n    return (\n      <div>\n        <div>\n          <Button onClick={() => this.setState({show: true})}>Show dialog</Button>\n        </div>\n\n        <Dialog show={this.state.show} onCloseAttempt={this.cancelDialog} trapFocus\n                showCloseButton>\n          <Header>Dialog title</Header>\n          <Content>Dialog content</Content>\n          <Panel>\n            <Button blue onClick={this.doAction}>OK</Button>\n            <Button onClick={this.cancelDialog}>Cancel</Button>\n          </Panel>\n        </Dialog>\n\n      </div>\n    );\n  }\n}\n\nrender(<DialogDemo />, document.getElementById('dialog'));\n  ",
          "showCode": true
        }
      ]
    },
    {
      "name": "Dialog with scroll",
      "url": "examples/dialog/dialog-with-scroll.html",
      "disableAutoSize": true,
      "files": [
        {
          "type": "html",
          "content": "\n<div>\n  <div id=\"dialog\"></div>\n</div>\n  ",
          "showCode": true
        },
        {
          "type": "js",
          "content": "\nimport {render} from 'react-dom';\nimport React from 'react';\n\nimport Dialog from '@jetbrains/ring-ui/components/dialog/dialog';\nimport {Header, Content} from '@jetbrains/ring-ui/components/island/island';\nimport Button from '@jetbrains/ring-ui/components/button/button';\nimport Panel from '@jetbrains/ring-ui/components/panel/panel';\n\nclass DialogDemo extends React.Component {\n  state = {\n    show: true\n  };\n\n  doAction = () => {\n    alert('action performed');\n    this.setState({show: false});\n  }\n\n  cancelDialog = () => {\n    this.setState({show: false});\n  }\n\n  render() {\n    return (\n      <div>\n        <div>\n          <Button onClick={() => this.setState({show: true})}>Show dialog</Button>\n        </div>\n\n        <Dialog show={this.state.show} onCloseAttempt={this.cancelDialog} trapFocus\n                showCloseButton>\n          <Header>Dialog title</Header>\n          <Content>\n            <div>\n              <p>Dialog content (scrollable)</p>\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting\n                industry. Lorem Ipsum has been the industry's standard dummy text ever\n                since the 1500s, when an unknown printer took a galley of type and\n                scrambled it to make a type specimen book. It has survived not only five\n                centuries, but also the leap into electronic typesetting, remaining\n                essentially unchanged.</p>\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting\n                industry. Lorem Ipsum has been the industry's standard dummy text ever\n                since the 1500s, when an unknown printer took a galley of type and\n                scrambled it to make a type specimen book. It has survived not only five\n                centuries, but also the leap into electronic typesetting, remaining\n                essentially unchanged.</p>\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting\n                industry. Lorem Ipsum has been the industry's standard dummy text ever\n                since the 1500s, when an unknown printer took a galley of type and\n                scrambled it to make a type specimen book. It has survived not only five\n                centuries, but also the leap into electronic typesetting, remaining\n                essentially unchanged.</p>\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting\n                industry. Lorem Ipsum has been the industry's standard dummy text ever\n                since the 1500s, when an unknown printer took a galley of type and\n                scrambled it to make a type specimen book. It has survived not only five\n                centuries, but also the leap into electronic typesetting, remaining\n                essentially unchanged.</p>\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting\n                industry. Lorem Ipsum has been the industry's standard dummy text ever\n                since the 1500s, when an unknown printer took a galley of type and\n                scrambled it to make a type specimen book. It has survived not only five\n                centuries, but also the leap into electronic typesetting, remaining\n                essentially unchanged.</p>\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting\n                industry. Lorem Ipsum has been the industry's standard dummy text ever\n                since the 1500s, when an unknown printer took a galley of type and\n                scrambled it to make a type specimen book. It has survived not only five\n                centuries, but also the leap into electronic typesetting, remaining\n                essentially unchanged.</p>\n              <p>Lorem Ipsum is simply dummy text of the printing and typesetting\n                industry. Lorem Ipsum has been the industry's standard dummy text ever\n                since the 1500s, when an unknown printer took a galley of type and\n                scrambled it to make a type specimen book. It has survived not only five\n                centuries, but also the leap into electronic typesetting, remaining\n                essentially unchanged.</p>\n            </div>\n          </Content>\n          <Panel>\n            <Button blue onClick={this.doAction}>OK</Button>\n            <Button onClick={this.cancelDialog}>Cancel</Button>\n          </Panel>\n        </Dialog>\n\n      </div>\n    );\n  }\n}\n\nrender(<DialogDemo />, document.getElementById('dialog'));\n  ",
          "showCode": true
        }
      ]
    }
  ],
  "description": "The Dialog component is a simple way to present content above an enclosing view.",
  "attrs": {
    "name": "Dialog",
    "category": "Components",
    "framework": "React",
    "constructor": "",
    "description": "The Dialog component is a simple way to present content above an enclosing view.",
    "example-file": "./dialog.examples.html"
  }
};