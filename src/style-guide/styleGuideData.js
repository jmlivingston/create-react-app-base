const styleGuideData = {
  Alert: {
    children: {
      AlertContent: { components: ['Alert'] },
      AlertDefault: { components: ['Alert'] },
      AlertDismiss: { components: ['Alert'] },
      AlertLink: { components: ['Alert'] },
      AlertUncontrolledDismiss: { components: ['UncontrolledAlert'] }
    }
  },
  Badge: {
    children: {
      BadgeButton: { components: ['Badge', 'Button'] },
      BadgeDefault: { components: ['Badge'] },
      BadgeLinks: { components: ['Badge'] },
      BadgePills: { components: ['Badge'] },
      BadgeVariations: { components: ['Badge'] }
    }
  },
  Breadcrumb: {
    children: {
      BreadcrumbDefault: { components: ['Breadcrumb', 'BreadcrumbItem'] },
      BreadcrumbNoList: { components: ['Breadcrumb', 'BreadcrumbItem'] }
    }
  },
  Button: {
    children: {
      ButtonDefault: { components: ['Button'] },
      ButtonDropdownDefault: { components: ['ButtonDropdown', 'DropdownToggle', 'DropdownMenu', 'DropdownItem'] },
      ButtonDropdownMulti: { components: ['ButtonDropdown', 'DropdownToggle', 'DropdownMenu', 'DropdownItem'] },
      ButtonDropdownMultiSplit: {
        components: ['Button', 'ButtonDropdown', 'DropdownToggle', 'DropdownMenu', 'DropdownItem']
      },
      ButtonGroupDefault: { components: ['Button', 'ButtonGroup'] },
      ButtonOutline: { components: ['Button'] },
      ButtonStateful: { components: ['Button', 'ButtonGroup'] },
      ButtonToolbarDefault: { components: ['Button', 'ButtonGroup', 'ButtonToolbar'] }
    }
  },
  Card: {
    children: {
      CardAlignment: { components: ['Card', 'Button', 'CardTitle', 'CardText'] },
      CardBackgrounds: { components: ['Card', 'Button', 'CardTitle', 'CardText'] },
      CardColumnsDefault: {
        components: ['Card', 'Button', 'CardImg', 'CardTitle', 'CardText', 'CardColumns', 'CardSubtitle', 'CardBody']
      },
      CardContentTypes: { components: ['Card', 'CardText', 'CardBody', 'CardLink', 'CardTitle', 'CardSubtitle'] },
      CardDecks: {
        components: ['Card', 'Button', 'CardImg', 'CardTitle', 'CardText', 'CardDeck', 'CardSubtitle', 'CardBody']
      },
      CardDefault: { components: ['Card', 'CardImg', 'CardText', 'CardBody', 'CardTitle', 'CardSubtitle', 'Button'] },
      CardGroups: {
        components: ['Card', 'Button', 'CardImg', 'CardTitle', 'CardText', 'CardGroup', 'CardSubtitle', 'CardBody']
      },
      CardHeaderFooter: {
        components: ['Card', 'Button', 'CardHeader', 'CardFooter', 'CardBody', 'CardTitle', 'CardText']
      },
      CardImageCaps: { components: ['Card', 'CardBody', 'CardTitle', 'CardText', 'CardImg'] },
      CardImageOverlay: { components: ['Card', 'CardTitle', 'CardText', 'CardImg', 'CardImgOverlay'] },
      CardOutline: { components: ['Card', 'Button', 'CardTitle', 'CardText'] },
      CardSizing: { components: ['Card', 'Button', 'CardTitle', 'CardText', 'Row', 'Col'] }
    }
  },
  Carousel: {
    children: {
      CarouselCustomTag: {
        components: ['Carousel', 'CarouselItem', 'CarouselControl', 'CarouselIndicators', 'CarouselCaption']
      },
      CarouselDefault: {
        components: ['Carousel', 'CarouselItem', 'CarouselControl', 'CarouselIndicators', 'CarouselCaption']
      },
      CarouselUncontrolled: { components: ['UncontrolledCarousel'] }
    }
  },
  Collapse: {
    children: {
      CollapseDefault: { components: ['Collapse', 'Button', 'CardBody', 'Card'] },
      CollapseEvents: { components: ['Collapse', 'Button', 'CardBody', 'Card'] }
    }
  },
  Color: { children: { ColorDefault: { components: [] } } },
  DatePicker: { children: { DatePickerDefault: { components: ['DatePicker'] } } },
  Dropdown: {
    children: {
      DropDownCustom: { components: ['Dropdown', 'DropdownMenu', 'DropdownToggle'] },
      DropdownDefault: { components: ['Dropdown', 'DropdownToggle', 'DropdownMenu', 'DropdownItem'] },
      DropdownSizing: { components: ['Dropdown', 'DropdownToggle', 'DropdownMenu', 'DropdownItem'] },
      DropdownUncontrolled: { components: ['UncontrolledDropdown', 'DropdownToggle', 'DropdownMenu', 'DropdownItem'] }
    }
  },
  Fade: { children: { FadeDefault: { components: ['Button', 'Fade'] } } },
  Form: {
    children: {
      FormCustomControls: { components: ['CustomInput', 'Form', 'FormGroup', 'Label'] },
      FormDefault: { components: ['Button', 'Form', 'FormGroup', 'Label', 'Input', 'FormText'] },
      FormFeedbackDefault: { components: ['Form', 'FormGroup', 'Label', 'Input', 'FormFeedback', 'FormText'] },
      FormGrid: { components: ['Col', 'Button', 'Form', 'FormGroup', 'Label', 'Input', 'FormText'] },
      FormInline: { components: ['Button', 'Form', 'FormGroup', 'Label', 'Input'] },
      FormInlineCheckboxes: { components: ['Form', 'FormGroup', 'Label', 'Input'] },
      FormInputGridSizing: { components: ['Col', 'Form', 'FormGroup', 'Label', 'Input'] },
      FormInputGroupAddon: { components: ['InputGroup', 'InputGroupText', 'InputGroupAddon', 'Input'] },
      FormInputGroupButton: { components: [] },
      FormInputGroupButtonDropdown: {
        components: ['InputGroupButtonDropdown', 'DropdownToggle', 'DropdownMenu', 'DropdownItem']
      },
      FormInputGroupButtonShorthand: { components: ['InputGroup', 'InputGroupAddon', 'Button', 'Input'] },
      FormInputGroupOverview: { components: ['InputGroup', 'InputGroupAddon', 'InputGroupText', 'Input'] },
      FormInputGroupSizing: { components: ['InputGroup', 'InputGroupAddon', 'Input'] },
      FormInputSizing: { components: ['Form', 'Input'] },
      FormInputType: { components: ['Form', 'FormGroup', 'Label', 'Input', 'FormText'] },
      FormLabelHidden: { components: ['Button', 'Form', 'FormGroup', 'Label', 'Input'] }
    }
  },
  Jumbotron: {
    children: {
      JumbotronDefault: { components: ['Jumbotron', 'Button'] },
      JumbotronFluid: { components: ['Jumbotron', 'Container'] }
    }
  },
  Layout: { children: { LayoutDefault: { components: ['Container', 'Row', 'Col'] } } },
  ListGroup: {
    children: {
      ListGroupAnchorsAndButtons: { components: ['ListGroup', 'ListGroupItem'] },
      ListGroupBadge: { components: ['ListGroup', 'ListGroupItem', 'Badge'] },
      ListGroupContextualClasses: { components: ['ListGroup', 'ListGroupItem'] },
      ListGroupCustomContent: {
        components: ['ListGroup', 'ListGroupItem', 'ListGroupItemHeading', 'ListGroupItemText']
      },
      ListGroupDefault: { components: ['ListGroup', 'ListGroupItem'] },
      ListGroupDisabledItems: { components: ['ListGroup', 'ListGroupItem'] }
    }
  },
  Media: {
    children: {
      MediaAlignment: { components: ['Media'] },
      MediaDefault: { components: ['Media'] },
      MediaList: { components: ['Media'] },
      MediaNested: { components: ['Media'] }
    }
  },
  Modal: {
    children: {
      ModalBackdrop: {
        components: [
          'Button',
          'Modal',
          'ModalHeader',
          'ModalBody',
          'ModalFooter',
          'Input',
          'Label',
          'Form',
          'FormGroup'
        ]
      },
      ModalCustomTimeout: { components: ['Button', 'Modal', 'ModalHeader', 'ModalBody', 'ModalFooter'] },
      ModalDefault: { components: ['Button', 'Modal', 'ModalHeader', 'ModalBody', 'ModalFooter'] },
      ModalExternal: { components: ['Button', 'Modal', 'ModalHeader', 'ModalBody', 'ModalFooter'] },
      ModalFadeless: { components: ['Button', 'Modal', 'ModalHeader', 'ModalBody', 'ModalFooter'] },
      ModalNested: { components: ['Button', 'Modal', 'ModalHeader', 'ModalBody', 'ModalFooter'] }
    }
  },
  Nav: {
    children: {
      NavDefault: { components: ['Nav', 'NavItem', 'NavLink'] },
      NavNavbarDefault: { components: [] },
      NavNavbarTogglerDefault: {
        components: ['Collapse', 'Navbar', 'NavbarToggler', 'NavbarBrand', 'Nav', 'NavItem', 'NavLink']
      },
      NavPills: {
        components: ['Nav', 'NavItem', 'Dropdown', 'DropdownItem', 'DropdownToggle', 'DropdownMenu', 'NavLink']
      },
      NavTabs: {
        components: ['Nav', 'NavItem', 'Dropdown', 'DropdownItem', 'DropdownToggle', 'DropdownMenu', 'NavLink']
      },
      NavVertical: { components: ['Nav', 'NavItem', 'NavLink'] }
    }
  },
  Pagination: {
    children: {
      PaginationDefault: { components: ['Pagination', 'PaginationItem', 'PaginationLink'] },
      PaginationSizingLarge: { components: ['Pagination', 'PaginationItem', 'PaginationLink'] },
      PaginationSizingSmall: { components: ['Pagination', 'PaginationItem', 'PaginationLink'] },
      PaginationState: { components: ['Pagination', 'PaginationItem', 'PaginationLink'] }
    }
  },
  Popover: {
    children: {
      PopoverDefault: { components: ['Button', 'Popover', 'PopoverHeader', 'PopoverBody'] },
      PopoverMulti: { components: ['Button', 'Popover', 'PopoverHeader', 'PopoverBody'] }
    }
  },
  Progress: {
    children: {
      ProgressAnimated: { components: ['Progress'] },
      ProgressColor: { components: ['Progress'] },
      ProgressDefault: { components: ['Progress'] },
      ProgressLabels: { components: ['Progress'] },
      ProgressMax: { components: ['Progress'] },
      ProgressMulti: { components: ['Progress'] },
      ProgressStriped: { components: ['Progress'] }
    }
  },
  Table: {
    children: {
      TableBordered: { components: ['Table'] },
      TableBorderless: { components: ['Table'] },
      TableDark: { components: ['Table'] },
      TableDefault: { components: ['Table'] },
      TableHover: { components: ['Table'] },
      TableResponsive: { components: ['Table'] },
      TableSizing: { components: ['Table'] },
      TableStriped: { components: ['Table'] }
    }
  },
  Tabs: { children: { TabsDefault: { components: [] } } },
  Tooltip: {
    children: {
      TooltipAutoHide: { components: ['Tooltip'] },
      TooltipDefault: { components: ['Tooltip'] },
      TooltipMulti: { components: ['Button', 'Tooltip'] },
      TooltipUncontrolled: { components: ['UncontrolledTooltip'] }
    }
  }
}
const importComponentByName = async name => {
  let component
  switch (name) {
    case 'Alert':
      component = await import('components/Common/Alert')
      break
    case 'Badge':
      component = await import('components/Common/Badge')
      break
    case 'Breadcrumb':
      component = await import('components/Common/Breadcrumb')
      break
    case 'BreadcrumbItem':
      component = await import('components/Common/BreadcrumbItem')
      break
    case 'Button':
      component = await import('components/Common/Button')
      break
    case 'ButtonDropdown':
      component = await import('components/Common/ButtonDropdown')
      break
    case 'ButtonGroup':
      component = await import('components/Common/ButtonGroup')
      break
    case 'ButtonToolbar':
      component = await import('components/Common/ButtonToolbar')
      break
    case 'Card':
      component = await import('components/Common/Card')
      break
    case 'CardBody':
      component = await import('components/Common/CardBody')
      break
    case 'CardColumns':
      component = await import('components/Common/CardColumns')
      break
    case 'CardDeck':
      component = await import('components/Common/CardDeck')
      break
    case 'CardFooter':
      component = await import('components/Common/CardFooter')
      break
    case 'CardGroup':
      component = await import('components/Common/CardGroup')
      break
    case 'CardHeader':
      component = await import('components/Common/CardHeader')
      break
    case 'CardImg':
      component = await import('components/Common/CardImg')
      break
    case 'CardImgOverlay':
      component = await import('components/Common/CardImgOverlay')
      break
    case 'CardLink':
      component = await import('components/Common/CardLink')
      break
    case 'CardSubtitle':
      component = await import('components/Common/CardSubtitle')
      break
    case 'CardText':
      component = await import('components/Common/CardText')
      break
    case 'CardTitle':
      component = await import('components/Common/CardTitle')
      break
    case 'Carousel':
      component = await import('components/Common/Carousel')
      break
    case 'CarouselCaption':
      component = await import('components/Common/CarouselCaption')
      break
    case 'CarouselControl':
      component = await import('components/Common/CarouselControl')
      break
    case 'CarouselIndicators':
      component = await import('components/Common/CarouselIndicators')
      break
    case 'CarouselItem':
      component = await import('components/Common/CarouselItem')
      break
    case 'Col':
      component = await import('components/Common/Col')
      break
    case 'Collapse':
      component = await import('components/Common/Collapse')
      break
    case 'Container':
      component = await import('components/Common/Container')
      break
    case 'CustomInput':
      component = await import('components/Common/CustomInput')
      break
    case 'DatePicker':
      component = await import('components/Common/DatePicker')
      break
    case 'DateTime':
      component = await import('components/Common/DateTime')
      break
    case 'Debugger':
      component = await import('components/Common/Debugger')
      break
    case 'Dropdown':
      component = await import('components/Common/Dropdown')
      break
    case 'DropdownItem':
      component = await import('components/Common/DropdownItem')
      break
    case 'DropdownMenu':
      component = await import('components/Common/DropdownMenu')
      break
    case 'DropdownToggle':
      component = await import('components/Common/DropdownToggle')
      break
    case 'Error':
      component = await import('components/Common/Error')
      break
    case 'Fade':
      component = await import('components/Common/Fade')
      break
    case 'Form':
      component = await import('components/Common/Form')
      break
    case 'FormFeedback':
      component = await import('components/Common/FormFeedback')
      break
    case 'FormGroup':
      component = await import('components/Common/FormGroup')
      break
    case 'FormText':
      component = await import('components/Common/FormText')
      break
    case 'Icon':
      component = await import('components/Common/Icon')
      break
    case 'Input':
      component = await import('components/Common/Input')
      break
    case 'InputGroup':
      component = await import('components/Common/InputGroup')
      break
    case 'InputGroupAddon':
      component = await import('components/Common/InputGroupAddon')
      break
    case 'InputGroupButtonDropdown':
      component = await import('components/Common/InputGroupButtonDropdown')
      break
    case 'InputGroupText':
      component = await import('components/Common/InputGroupText')
      break
    case 'Jumbotron':
      component = await import('components/Common/Jumbotron')
      break
    case 'Label':
      component = await import('components/Common/Label')
      break
    case 'ListGroup':
      component = await import('components/Common/ListGroup')
      break
    case 'ListGroupItem':
      component = await import('components/Common/ListGroupItem')
      break
    case 'ListGroupItemHeading':
      component = await import('components/Common/ListGroupItemHeading')
      break
    case 'ListGroupItemText':
      component = await import('components/Common/ListGroupItemText')
      break
    case 'Loader':
      component = await import('components/Common/Loader')
      break
    case 'Loader.scss':
      component = await import('components/Common/Loader.scss')
      break
    case 'Media':
      component = await import('components/Common/Media')
      break
    case 'Modal':
      component = await import('components/Common/Modal')
      break
    case 'ModalBody':
      component = await import('components/Common/ModalBody')
      break
    case 'ModalFooter':
      component = await import('components/Common/ModalFooter')
      break
    case 'ModalHeader':
      component = await import('components/Common/ModalHeader')
      break
    case 'Nav':
      component = await import('components/Common/Nav')
      break
    case 'NavItem':
      component = await import('components/Common/NavItem')
      break
    case 'NavLink':
      component = await import('components/Common/NavLink')
      break
    case 'Navbar':
      component = await import('components/Common/Navbar')
      break
    case 'NavbarBrand':
      component = await import('components/Common/NavbarBrand')
      break
    case 'NavbarToggler':
      component = await import('components/Common/NavbarToggler')
      break
    case 'Pagination':
      component = await import('components/Common/Pagination')
      break
    case 'PaginationItem':
      component = await import('components/Common/PaginationItem')
      break
    case 'PaginationLink':
      component = await import('components/Common/PaginationLink')
      break
    case 'Popover':
      component = await import('components/Common/Popover')
      break
    case 'PopoverBody':
      component = await import('components/Common/PopoverBody')
      break
    case 'PopoverHeader':
      component = await import('components/Common/PopoverHeader')
      break
    case 'Progress':
      component = await import('components/Common/Progress')
      break
    case 'Row':
      component = await import('components/Common/Row')
      break
    case 'TabContent':
      component = await import('components/Common/TabContent')
      break
    case 'TabPane':
      component = await import('components/Common/TabPane')
      break
    case 'Table':
      component = await import('components/Common/Table')
      break
    case 'Tooltip':
      component = await import('components/Common/Tooltip')
      break
    case 'UncontrolledAlert':
      component = await import('components/Common/UncontrolledAlert')
      break
    case 'UncontrolledButtonDropdown':
      component = await import('components/Common/UncontrolledButtonDropdown')
      break
    case 'UncontrolledCarousel':
      component = await import('components/Common/UncontrolledCarousel')
      break
    case 'UncontrolledDropdown':
      component = await import('components/Common/UncontrolledDropdown')
      break
    case 'UncontrolledTooltip':
      component = await import('components/Common/UncontrolledTooltip')
      break
    default:
      break
  }
  return component
}

export { importComponentByName, styleGuideData }
