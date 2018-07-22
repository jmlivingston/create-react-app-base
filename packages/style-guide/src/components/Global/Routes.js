import { Redirect, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import React from 'react'

import { Loader } from '@myorg/components'

const loadableConfig = {
  delay: 200,
  timeout: 10000
}

const Routes = () => (
  <Switch>
    <Route
      exact
      path="/"
      component={Loadable({
        ...loadableConfig,
        loading: props => <Loader />,
        loader: () => import('../StyleGuide/examples/components/Alert/AlertContainer'),
        render(loaded, props) {
          const AlertContainer = loaded.default
          return <AlertContainer {...props} />
        }
      })}
    />

    <Route
      exact
      path="/Alert"
      component={Loadable({
        ...loadableConfig,
        loading: props => <Loader />,
        loader: () => import('../StyleGuide/examples/components/Alert/AlertContainer'),
        render(loaded, props) {
          const AlertContainer = loaded.default
          return <AlertContainer {...props} />
        }
      })}
    />

    <Route
      exact
      path="/Badge"
      component={Loadable({
        ...loadableConfig,
        loading: props => <Loader />,
        loader: () => import('../StyleGuide/examples/components/Badge/BadgeContainer'),
        render(loaded, props) {
          const BadgeContainer = loaded.default
          return <BadgeContainer {...props} />
        }
      })}
    />

    <Route
      exact
      path="/Breadcrumb"
      component={Loadable({
        ...loadableConfig,
        loading: props => <Loader />,
        loader: () => import('../StyleGuide/examples/components/Breadcrumb/BreadcrumbContainer'),
        render(loaded, props) {
          const BreadcrumbContainer = loaded.default
          return <BreadcrumbContainer {...props} />
        }
      })}
    />

    <Route
      exact
      path="/Button"
      component={Loadable({
        ...loadableConfig,
        loading: props => <Loader />,
        loader: () => import('../StyleGuide/examples/components/Button/ButtonContainer'),
        render(loaded, props) {
          const ButtonContainer = loaded.default
          return <ButtonContainer {...props} />
        }
      })}
    />

    <Route
      exact
      path="/Card"
      component={Loadable({
        ...loadableConfig,
        loading: props => <Loader />,
        loader: () => import('../StyleGuide/examples/components/Card/CardContainer'),
        render(loaded, props) {
          const CardContainer = loaded.default
          return <CardContainer {...props} />
        }
      })}
    />

    <Route
      exact
      path="/Carousel"
      component={Loadable({
        ...loadableConfig,
        loading: props => <Loader />,
        loader: () => import('../StyleGuide/examples/components/Carousel/CarouselContainer'),
        render(loaded, props) {
          const CarouselContainer = loaded.default
          return <CarouselContainer {...props} />
        }
      })}
    />

    <Route
      exact
      path="/Collapse"
      component={Loadable({
        ...loadableConfig,
        loading: props => <Loader />,
        loader: () => import('../StyleGuide/examples/components/Collapse/CollapseContainer'),
        render(loaded, props) {
          const CollapseContainer = loaded.default
          return <CollapseContainer {...props} />
        }
      })}
    />

    <Route
      exact
      path="/Color"
      component={Loadable({
        ...loadableConfig,
        loading: props => <Loader />,
        loader: () => import('../StyleGuide/examples/components/Color/ColorContainer'),
        render(loaded, props) {
          const ColorContainer = loaded.default
          return <ColorContainer {...props} />
        }
      })}
    />

    <Route
      exact
      path="/DatePicker"
      component={Loadable({
        ...loadableConfig,
        loading: props => <Loader />,
        loader: () => import('../StyleGuide/examples/components/DatePicker/DatePickerContainer'),
        render(loaded, props) {
          const DatePickerContainer = loaded.default
          return <DatePickerContainer {...props} />
        }
      })}
    />

    <Route
      exact
      path="/Dropdown"
      component={Loadable({
        ...loadableConfig,
        loading: props => <Loader />,
        loader: () => import('../StyleGuide/examples/components/Dropdown/DropdownContainer'),
        render(loaded, props) {
          const DropdownContainer = loaded.default
          return <DropdownContainer {...props} />
        }
      })}
    />

    <Route
      exact
      path="/Fade"
      component={Loadable({
        ...loadableConfig,
        loading: props => <Loader />,
        loader: () => import('../StyleGuide/examples/components/Fade/FadeContainer'),
        render(loaded, props) {
          const FadeContainer = loaded.default
          return <FadeContainer {...props} />
        }
      })}
    />

    <Route
      exact
      path="/Form"
      component={Loadable({
        ...loadableConfig,
        loading: props => <Loader />,
        loader: () => import('../StyleGuide/examples/components/Form/FormContainer'),
        render(loaded, props) {
          const FormContainer = loaded.default
          return <FormContainer {...props} />
        }
      })}
    />

    <Route
      exact
      path="/Jumbotron"
      component={Loadable({
        ...loadableConfig,
        loading: props => <Loader />,
        loader: () => import('../StyleGuide/examples/components/Jumbotron/JumbotronContainer'),
        render(loaded, props) {
          const JumbotronContainer = loaded.default
          return <JumbotronContainer {...props} />
        }
      })}
    />

    <Route
      exact
      path="/KitchenSink"
      component={Loadable({
        ...loadableConfig,
        loading: props => <Loader />,
        loader: () => import('../StyleGuide/examples/components/KitchenSink/KitchenSinkContainer'),
        render(loaded, props) {
          const KitchenSinkContainer = loaded.default
          return <KitchenSinkContainer {...props} />
        }
      })}
    />

    <Route
      exact
      path="/Layout"
      component={Loadable({
        ...loadableConfig,
        loading: props => <Loader />,
        loader: () => import('../StyleGuide/examples/components/Layout/LayoutContainer'),
        render(loaded, props) {
          const LayoutContainer = loaded.default
          return <LayoutContainer {...props} />
        }
      })}
    />
    <Route
      exact
      path="/ListGroup"
      component={Loadable({
        ...loadableConfig,
        loading: props => <Loader />,
        loader: () => import('../StyleGuide/examples/components/ListGroup/ListGroupContainer'),
        render(loaded, props) {
          const ListGroupContainer = loaded.default
          return <ListGroupContainer {...props} />
        }
      })}
    />
    <Route
      exact
      path="/Media"
      component={Loadable({
        ...loadableConfig,
        loading: props => <Loader />,
        loader: () => import('../StyleGuide/examples/components/Media/MediaContainer'),
        render(loaded, props) {
          const MediaContainer = loaded.default
          return <MediaContainer {...props} />
        }
      })}
    />
    <Route
      exact
      path="/Modal"
      component={Loadable({
        ...loadableConfig,
        loading: props => <Loader />,
        loader: () => import('../StyleGuide/examples/components/Modal/ModalContainer'),
        render(loaded, props) {
          const ModalContainer = loaded.default
          return <ModalContainer {...props} />
        }
      })}
    />
    <Route
      exact
      path="/Nav"
      component={Loadable({
        ...loadableConfig,
        loading: props => <Loader />,
        loader: () => import('../StyleGuide/examples/components/Nav/NavContainer'),
        render(loaded, props) {
          const NavContainer = loaded.default
          return <NavContainer {...props} />
        }
      })}
    />
    <Route
      exact
      path="/Pagination"
      component={Loadable({
        ...loadableConfig,
        loading: props => <Loader />,
        loader: () => import('../StyleGuide/examples/components/Pagination/PaginationContainer'),
        render(loaded, props) {
          const PaginationContainer = loaded.default
          return <PaginationContainer {...props} />
        }
      })}
    />
    <Route
      exact
      path="/Popover"
      component={Loadable({
        ...loadableConfig,
        loading: props => <Loader />,
        loader: () => import('../StyleGuide/examples/components/Popover/PopoverContainer'),
        render(loaded, props) {
          const PopoverContainer = loaded.default
          return <PopoverContainer {...props} />
        }
      })}
    />
    <Route
      exact
      path="/Progress"
      component={Loadable({
        ...loadableConfig,
        loading: props => <Loader />,
        loader: () => import('../StyleGuide/examples/components/Progress/ProgressContainer'),
        render(loaded, props) {
          const ProgressContainer = loaded.default
          return <ProgressContainer {...props} />
        }
      })}
    />
    <Route
      exact
      path="/Table"
      component={Loadable({
        ...loadableConfig,
        loading: props => <Loader />,
        loader: () => import('../StyleGuide/examples/components/Table/TableContainer'),
        render(loaded, props) {
          const TableContainer = loaded.default
          return <TableContainer {...props} />
        }
      })}
    />
    <Route
      exact
      path="/Tabs"
      component={Loadable({
        ...loadableConfig,
        loading: props => <Loader />,
        loader: () => import('../StyleGuide/examples/components/Tabs/TabsContainer'),
        render(loaded, props) {
          const TabsContainer = loaded.default
          return <TabsContainer {...props} />
        }
      })}
    />
    <Route
      exact
      path="/Tooltip"
      component={Loadable({
        ...loadableConfig,
        loading: props => <Loader />,
        loader: () => import('../StyleGuide/examples/components/Tooltip/TooltipContainer'),
        render(loaded, props) {
          const TooltipContainer = loaded.default
          return <TooltipContainer {...props} />
        }
      })}
    />

    <Redirect to="/" />
  </Switch>
)

export default Routes
