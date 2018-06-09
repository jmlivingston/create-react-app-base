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

export { styleGuideData }
