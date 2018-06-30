const KitchenSinkCode = `import React, { Fragment, PureComponent } from 'react'

import {
  Alert,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardColumns,
  CardDeck,
  CardFooter,
  CardGroup,
  CardHeader,
  CardImg,
  CardImgOverlay,
  CardLink,
  CardSubtitle,
  CardText,
  CardTitle,
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  Col,
  Collapse,
  Container,
  CustomInput,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Jumbotron,
  Label,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Media,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Pagination,
  PaginationItem,
  PaginationLink,
  Popover,
  PopoverBody,
  PopoverHeader,
  Progress,
  Row,
  TabContent,
  TabPane,
  Table,
  Tooltip,
  UncontrolledAlert,
  UncontrolledButtonDropdown,
  UncontrolledCarousel,
  UncontrolledDropdown,
  UncontrolledTooltip
} from '@myorg/components-common'

class KitchenSink extends PureComponent {
  state = {
    buttonDropdownOpen: false,
    isCollapsed: false,
    dropdownOpen: false,
    fadeIn: false,
    inputGroupDropdownOpen: false,
    modalOpen: false,
    popoverOpen: false,
    activeTab: '1',
    tooltipOpen: false,
    carouselActiveIndex: 0
  }

  toggleButtonDropdown() {
    this.setState({
      buttonDropdownOpen: !this.state.buttonDropdownOpen
    })
  }

  toggleCollapse() {
    this.setState(prevState => ({
      isCollapsed: !prevState.isCollapsed
    }))
  }

  toggleDropdown() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }

  toggleFade() {
    this.setState(prevState => ({
      fadeIn: !prevState.fadeIn
    }))
  }

  toggleInputGroupDropdownOpen() {
    this.setState(prevState => ({
      inputGroupDropdownOpen: !prevState.inputGroupDropdownOpen
    }))
  }

  toggleModal() {
    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen
    }))
  }

  togglePopover() {
    this.setState(prevState => ({
      popoverOpen: !prevState.popoverOpen
    }))
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }

  toggleTooltip() {
    this.setState(prevState => ({
      tooltipOpen: !prevState.tooltipOpen
    }))
  }

  carouselItems = [
    {
      src:
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
      altText: 'Slide 1',
      caption: 'Slide 1'
    },
    {
      src:
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
      altText: 'Slide 2',
      caption: 'Slide 2'
    },
    {
      src:
        'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
      altText: 'Slide 3',
      caption: 'Slide 3'
    }
  ]

  onCarouselExiting() {
    this.animating = true
  }

  onCarouselExited() {
    this.animating = false
  }

  carouselNext() {
    if (this.animating) return
    const nextIndex =
      this.state.carouselActiveIndex === this.carouselItems.length - 1 ? 0 : this.state.carouselActiveIndex + 1
    this.setState({ carouselActiveIndex: nextIndex })
  }

  carouselPrevious() {
    if (this.animating) return
    const nextIndex = this.state.activeIndex === 0 ? this.carouselItems.length - 1 : this.state.carouselActiveIndex - 1
    this.setState({ carouselActiveIndex: nextIndex })
  }

  goToCarouselIndex(newIndex) {
    if (this.animating) return
    this.setState({ carouselActiveIndex: newIndex })
  }

  render() {
    const uncontrolledCarouselItems = [
      {
        src:
          'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        altText: 'Slide 1',
        caption: 'Slide 1',
        header: 'Slide 1 Header'
      },
      {
        src:
          'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        altText: 'Slide 2',
        caption: 'Slide 2',
        header: 'Slide 2 Header'
      },
      {
        src:
          'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
        altText: 'Slide 3',
        caption: 'Slide 3',
        header: 'Slide 3 Header'
      }
    ]

    const carouselSlides = this.carouselItems.map(item => {
      return (
        <CarouselItem
          onExiting={() => this.onCarouselExiting()}
          onExited={() => this.onCarouselExited()}
          timeout={0}
          key={item.src}>
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      )
    })

    return (
      <Fragment>
        <Alert color="primary">This is a primary alert — check it out!</Alert>
        <Alert color="warning">This is a warning alert — check it out!</Alert>
        <Alert color="danger">This is a danger alert — check it out!</Alert>
        <h1>
          <Badge color="primary">New</Badge>
          <Badge color="warning">New</Badge>
          <Badge color="danger">New</Badge>
        </h1>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/">Library</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Data</BreadcrumbItem>
        </Breadcrumb>
        <Button color="primary">test</Button>
        <ButtonDropdown isOpen={this.state.buttonDropdownOpen} toggle={() => this.toggleButtonDropdown()}>
          <DropdownToggle caret>Button Dropdown</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
        <ButtonGroup>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <ButtonToolbar>
          <ButtonGroup>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button>5</Button>
            <Button>6</Button>
            <Button>7</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button>8</Button>
          </ButtonGroup>
        </ButtonToolbar>
        <CardColumns>
          <Card>
            <CardHeader>Header</CardHeader>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
            <CardFooter className="text-muted">Footer</CardFooter>
          </Card>
          <Card>
            <CardHeader>Header</CardHeader>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
            <CardFooter className="text-muted">Footer</CardFooter>
          </Card>
        </CardColumns>
        <CardDeck>
          <Card>
            <CardHeader>Header</CardHeader>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
            <CardFooter className="text-muted">Footer</CardFooter>
          </Card>
          <Card>
            <CardHeader>Header</CardHeader>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
            <CardFooter className="text-muted">Footer</CardFooter>
          </Card>
        </CardDeck>
        <CardGroup>
          <Card>
            <CardHeader>Header</CardHeader>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
            <CardFooter className="text-muted">Footer</CardFooter>
          </Card>
          <Card>
            <CardHeader>Header</CardHeader>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
            <CardFooter className="text-muted">Footer</CardFooter>
          </Card>
        </CardGroup>
        <div className="row">
          <div className="col-sm-3">
            <Card>
              <CardImg
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </CardText>
                <CardLink href="/">Card Link</CardLink>
                <CardLink href="/">Another Link</CardLink>
              </CardBody>
              <CardFooter className="text-muted">Footer</CardFooter>
            </Card>
          </div>
          <div className="col-sm-3">
            <Card inverse>
              <CardImg
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666"
                alt="Card image cap"
              />
              <CardImgOverlay>
                <CardTitle>Card Title</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural lead-in to additional content. This
                  content is a little bit longer.
                </CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardImgOverlay>
            </Card>
          </div>
        </div>
        <Carousel
          activeIndex={this.state.carouselActiveIndex}
          next={() => this.carouselNext()}
          previous={() => this.carouselPrevious()}>
          <CarouselIndicators
            items={this.carouselItems}
            activeIndex={this.state.carouselActiveIndex}
            onClickHandler={() => this.goToCarouselIndex()}
          />
          {carouselSlides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={() => this.carouselPrevious()} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={() => this.carouselNext()} />
        </Carousel>
        <button onClick={() => this.toggleCollapse()}>Toggle Collapse</button>
        <Collapse isOpen={this.state.isCollapsed} timeout={1}>
          <Fragment>I am collapse content</Fragment>
        </Collapse>
        <Container>
          <Row>
            <Col xs="6">.col-6</Col>
            <Col xs="6">.col-6</Col>
          </Row>
        </Container>
        <Form>
          <FormGroup>
            <Label for="exampleCheckbox">Checkboxes</Label>
            <Fragment>
              <CustomInput type="checkbox" id="exampleCustomCheckbox" label="Check this custom checkbox" />
              <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Or this one" />
              <CustomInput type="checkbox" id="exampleCustomCheckbox3" label="But not this disabled one" disabled />
            </Fragment>
          </FormGroup>
          <FormGroup>
            <Label for="exampleCheckbox">Radios</Label>
            <Fragment>
              <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="Select this custom radio" />
              <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="Or this one" />
              <CustomInput type="radio" id="exampleCustomRadio3" label="But not this disabled one" disabled />
            </Fragment>
          </FormGroup>
          <FormGroup>
            <Label for="exampleCheckbox">Inline</Label>
            <Fragment>
              <CustomInput type="checkbox" id="exampleCustomInline" label="An inline custom input" inline />
              <CustomInput type="checkbox" id="exampleCustomInline2" label="and another one" inline />
            </Fragment>
          </FormGroup>
          <FormGroup>
            <Label for="exampleCustomSelect">Custom Select</Label>
            <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
              <option value="">Select</option>
              <option>Value 1</option>
              <option>Value 2</option>
              <option>Value 3</option>
              <option>Value 4</option>
              <option>Value 5</option>
            </CustomInput>
          </FormGroup>
          <FormGroup>
            <Label for="exampleCustomMutlipleSelect">Custom Multiple Select</Label>
            <CustomInput type="select" id="exampleCustomMutlipleSelect" name="customSelect" multiple>
              <option value="">Select</option>
              <option>Value 1</option>
              <option>Value 2</option>
              <option>Value 3</option>
              <option>Value 4</option>
              <option>Value 5</option>
            </CustomInput>
          </FormGroup>
          <FormGroup>
            <Label for="exampleCustomFileBrowser">File Browser</Label>
            <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" />
          </FormGroup>
        </Form>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={() => this.toggleDropdown()}>
          <DropdownToggle caret>Dropdown</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Button color="primary" onClick={() => this.toggleFade()}>
          Toggle Fade
        </Button>
        <Fade in={this.state.fadeIn} tag="h5" className="mt-3" timeout={0}>
          This content will fade in and out as the button is pressed
        </Fade>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Valid input</Label>
            <Input valid />
            <FormFeedback valid>Sweet! that name is available</FormFeedback>
            <FormText>Example help text that remains unchanged.</FormText>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Invalid input</Label>
            <Input invalid />
            <FormFeedback>Oh noes! that name is already taken</FormFeedback>
            <FormText>Example help text that remains unchanged.</FormText>
          </FormGroup>
        </Form>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <Input addon type="checkbox" aria-label="Checkbox for following text input" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="Check it out" />
        </InputGroup>
        <InputGroup>
          <Input />
          <InputGroupButtonDropdown
            addonType="append"
            isOpen={this.state.inputGroupDropdownOpen}
            toggle={() => this.toggleInputGroupDropdownOpen()}>
            <DropdownToggle caret>Button Dropdown</DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </InputGroupButtonDropdown>
        </InputGroup>
        <Jumbotron>
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">
            This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured
            content or information.
          </p>
          <hr className="my-2" />
          <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
        </Jumbotron>
        <ListGroup>
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Morbi leo risus</ListGroupItem>
          <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <ListGroup>
          <ListGroupItem active>
            <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
            <ListGroupItemText>
              Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
            </ListGroupItemText>
          </ListGroupItem>
          <ListGroupItem>
            <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
            <ListGroupItemText>
              Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
            </ListGroupItemText>
          </ListGroupItem>
          <ListGroupItem>
            <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
            <ListGroupItemText>
              Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
            </ListGroupItemText>
          </ListGroupItem>
        </ListGroup>
        <Media>
          <Media left href="/">
            <Media object src="http://via.placeholder.com/64x64" alt="Generic placeholder image" />
          </Media>
          <Media body>
            <Media heading>Media heading</Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras
            purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
            fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>
        <Button color="danger" onClick={() => this.toggleModal()}>
          Open Modal
        </Button>
        <Modal isOpen={this.state.modalOpen} toggle={() => this.toggleModal()}>
          <ModalHeader toggle={() => this.toggleModal()}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.toggleModal()}>
              Do Something
            </Button>{' '}
            <Button color="secondary" onClick={() => this.toggleModal()}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler />
        </Navbar>
        <Nav>
          <NavItem>
            <NavLink href="/">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="/">
              Disabled Link
            </NavLink>
          </NavItem>
        </Nav>
        <Pagination>
          <PaginationItem>
            <PaginationLink previous href="/" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next href="/" />
          </PaginationItem>
        </Pagination>
        {/* TODO: Fix popover / Race conditions prevents this from working every timeout. You can refresh multiple times to see.
        May need to abstract */}
        <Button id="Popover1" onClick={() => this.togglePopover()}>
          Launch Popover
        </Button>
        <Popover
          placement="bottom"
          isOpen={this.state.popoverOpen}
          target="Popover1"
          toggle={() => this.togglePopover()}>
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>
            Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum.
          </PopoverBody>
        </Popover>
        <Fragment>
          <div className="text-center">0%</div>
          <Progress />
          <div className="text-center">25%</div>
          <Progress value="25" />
          <div className="text-center">50%</div>
          <Progress value={50} />
          <div className="text-center">75%</div>
          <Progress value={75} />
          <div className="text-center">100%</div>
          <Progress value="100" />
          <div className="text-center">Multiple bars</div>
          <Progress multi>
            <Progress bar value="15" />
            <Progress bar color="success" value="30" />
            <Progress bar color="info" value="25" />
            <Progress bar color="warning" value="20" />
            <Progress bar color="danger" value="5" />
          </Progress>
        </Fragment>
        <div className="pt-2">
          <Nav tabs>
            <NavItem>
              <NavLink
                active={this.state.activeTab === '1'}
                onClick={() => {
                  this.toggleTab('1')
                }}>
                Tab1
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                active={this.state.activeTab === '2'}
                onClick={() => {
                  this.toggleTab('2')
                }}>
                Moar Tabs
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <h4>Tab 1 Contents</h4>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card body>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Go somewhere</Button>
                  </Card>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
        <Table
          columns={[
            { Header: '#', accessor: 'id' },
            { Header: 'First Name', accessor: 'firstName' },
            { Header: 'Last Name', accessor: 'lastName' },
            { Header: 'Gender', accessor: 'gender' }
          ]}
          data={[
            { id: 1, firstName: 'Jackquelin', lastName: 'Headley', email: 'jheadley0@typepad.com', gender: 'Female' },
            { id: 2, firstName: 'Ray', lastName: 'Hundell', email: 'rhundell1@dion.ne.jp', gender: 'Female' },
            { id: 3, firstName: 'Harmony', lastName: 'Pickworth', email: 'hpickworth2@com.com', gender: 'Female' },
            { id: 4, firstName: 'Roth', lastName: 'Kalf', email: 'rkalf3@nhs.uk', gender: 'Male' },
            { id: 5, firstName: 'Di', lastName: 'Mariette', email: 'dmariette4@irs.gov', gender: 'Female' },
            { id: 6, firstName: 'Oralla', lastName: 'Toffoloni', email: 'otoffoloni5@senate.gov', gender: 'Female' },
            { id: 7, firstName: 'Abby', lastName: 'Viegas', email: 'aviegas6@etsy.com', gender: 'Male' },
            {
              id: 8,
              firstName: 'Bendicty',
              lastName: 'Northgraves',
              email: 'bnorthgraves7@statcounter.com',
              gender: 'Male'
            },
            { id: 9, firstName: 'Tim', lastName: 'Thaxton', email: 'tthaxton8@theatlantic.com', gender: 'Female' },
            { id: 10, firstName: 'Aloin', lastName: 'Yakubov', email: 'ayakubov9@photobucket.com', gender: 'Male' },
            { id: 11, firstName: 'Marion', lastName: 'Beeston', email: 'mbeestona@redcross.org', gender: 'Female' },
            {
              id: 12,
              firstName: 'Janenna',
              lastName: 'Aronoff',
              email: 'jaronoffb@howstuffworks.com',
              gender: 'Female'
            },
            { id: 13, firstName: 'Almeria', lastName: 'Glayzer', email: 'aglayzerc@nyu.edu', gender: 'Female' },
            { id: 14, firstName: 'Claus', lastName: 'Hilling', email: 'chillingd@typepad.com', gender: 'Male' },
            { id: 15, firstName: 'Audi', lastName: 'Mackley', email: 'amackleye@meetup.com', gender: 'Female' },
            { id: 16, firstName: 'Gisele', lastName: 'McMillian', email: 'gmcmillianf@nature.com', gender: 'Female' },
            { id: 17, firstName: 'Arlina', lastName: 'Youdell', email: 'ayoudellg@miibeian.gov.cn', gender: 'Female' },
            { id: 18, firstName: 'Dennie', lastName: 'McIlhatton', email: 'dmcilhattonh@51.la', gender: 'Male' },
            { id: 19, firstName: 'Hendrik', lastName: 'Royce', email: 'hroycei@blogtalkradio.com', gender: 'Male' },
            { id: 20, firstName: 'Donavon', lastName: 'Rickhuss', email: 'drickhussj@businesswire.com', gender: 'Male' }
          ]}
        />
        <p>
          Somewhere in here is a{' '}
          <a href="/" id="TooltipExample">
            tooltip
          </a>.
        </p>
        <Tooltip
          placement="top"
          isOpen={this.state.tooltipOpen}
          target="TooltipExample"
          toggle={() => this.toggleTooltip()}>
          Hello world!
        </Tooltip>
        <UncontrolledAlert color="info">I am an alert and I can be dismissed!</UncontrolledAlert>
        <UncontrolledDropdown>
          <DropdownToggle caret>Dropdown</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledButtonDropdown>
          <DropdownToggle caret>Button Dropdown</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </UncontrolledButtonDropdown>
        <p>
          Somewhere in here is a{' '}
          <a href="/" id="UncontrolledTooltipExample">
            tooltip
          </a>.
        </p>
        <UncontrolledTooltip placement="top" target="UncontrolledTooltipExample">
          Hello world!
        </UncontrolledTooltip>
        <UncontrolledCarousel items={uncontrolledCarouselItems} />
      </Fragment>
    )
  }
}

export default KitchenSink
`

export default KitchenSinkCode
