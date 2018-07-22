import Loadable from 'react-loadable'

const loading = () => null

const AlertContent = Loadable({
  loading,
  loader: () => import('./Alert/AlertContent')
})

const AlertDefault = Loadable({
  loading,
  loader: () => import('./Alert/AlertDefault')
})

const AlertDismiss = Loadable({
  loading,
  loader: () => import('./Alert/AlertDismiss')
})

const AlertLink = Loadable({
  loading,
  loader: () => import('./Alert/AlertLink')
})

const AlertUncontrolledDismiss = Loadable({
  loading,
  loader: () => import('./Alert/AlertUncontrolledDismiss')
})

const BadgeButton = Loadable({
  loading,
  loader: () => import('./Badge/BadgeButton')
})

const BadgeDefault = Loadable({
  loading,
  loader: () => import('./Badge/BadgeDefault')
})

const BadgeLinks = Loadable({
  loading,
  loader: () => import('./Badge/BadgeLinks')
})

const BadgePills = Loadable({
  loading,
  loader: () => import('./Badge/BadgePills')
})

const BadgeVariations = Loadable({
  loading,
  loader: () => import('./Badge/BadgeVariations')
})

const BreadcrumbDefault = Loadable({
  loading,
  loader: () => import('./Breadcrumb/BreadcrumbDefault')
})

const BreadcrumbNoList = Loadable({
  loading,
  loader: () => import('./Breadcrumb/BreadcrumbNoList')
})

const ButtonDefault = Loadable({
  loading,
  loader: () => import('./Button/ButtonDefault')
})

const ButtonDropdownDefault = Loadable({
  loading,
  loader: () => import('./Button/ButtonDropdownDefault')
})

const ButtonDropdownMulti = Loadable({
  loading,
  loader: () => import('./Button/ButtonDropdownMulti')
})

const ButtonDropdownMultiSplit = Loadable({
  loading,
  loader: () => import('./Button/ButtonDropdownMultiSplit')
})

const ButtonGroupDefault = Loadable({
  loading,
  loader: () => import('./Button/ButtonGroupDefault')
})

const ButtonOutline = Loadable({
  loading,
  loader: () => import('./Button/ButtonOutline')
})

const ButtonStateful = Loadable({
  loading,
  loader: () => import('./Button/ButtonStateful')
})

const ButtonToolbarDefault = Loadable({
  loading,
  loader: () => import('./Button/ButtonToolbarDefault')
})

const CardAlignment = Loadable({
  loading,
  loader: () => import('./Card/CardAlignment')
})

const CardBackgrounds = Loadable({
  loading,
  loader: () => import('./Card/CardBackgrounds')
})

const CardColumnsDefault = Loadable({
  loading,
  loader: () => import('./Card/CardColumnsDefault')
})

const CardContentTypes = Loadable({
  loading,
  loader: () => import('./Card/CardContentTypes')
})

const CardDecks = Loadable({
  loading,
  loader: () => import('./Card/CardDecks')
})

const CardDefault = Loadable({
  loading,
  loader: () => import('./Card/CardDefault')
})

const CardGroups = Loadable({
  loading,
  loader: () => import('./Card/CardGroups')
})

const CardHeaderFooter = Loadable({
  loading,
  loader: () => import('./Card/CardHeaderFooter')
})

const CardImageCaps = Loadable({
  loading,
  loader: () => import('./Card/CardImageCaps')
})

const CardImageOverlay = Loadable({
  loading,
  loader: () => import('./Card/CardImageOverlay')
})

const CardOutline = Loadable({
  loading,
  loader: () => import('./Card/CardOutline')
})

const CardSizing = Loadable({
  loading,
  loader: () => import('./Card/CardSizing')
})

const CarouselCustomTag = Loadable({
  loading,
  loader: () => import('./Carousel/CarouselCustomTag')
})

const CarouselDefault = Loadable({
  loading,
  loader: () => import('./Carousel/CarouselDefault')
})

const CarouselUncontrolled = Loadable({
  loading,
  loader: () => import('./Carousel/CarouselUncontrolled')
})

const CollapseDefault = Loadable({
  loading,
  loader: () => import('./Collapse/CollapseDefault')
})

const CollapseEvents = Loadable({
  loading,
  loader: () => import('./Collapse/CollapseEvents')
})

const ColorDefault = Loadable({
  loading,
  loader: () => import('./Color/ColorDefault')
})

const DatePickerDefault = Loadable({
  loading,
  loader: () => import('./DatePicker/DatePickerDefault')
})

const DropdownCustom = Loadable({
  loading,
  loader: () => import('./Dropdown/DropdownCustom')
})

const DropdownDefault = Loadable({
  loading,
  loader: () => import('./Dropdown/DropdownDefault')
})

const DropdownSizing = Loadable({
  loading,
  loader: () => import('./Dropdown/DropdownSizing')
})

const DropdownUncontrolled = Loadable({
  loading,
  loader: () => import('./Dropdown/DropdownUncontrolled')
})

const FadeDefault = Loadable({
  loading,
  loader: () => import('./Fade/FadeDefault')
})

const FormCustomControls = Loadable({
  loading,
  loader: () => import('./Form/FormCustomControls')
})

const FormDefault = Loadable({
  loading,
  loader: () => import('./Form/FormDefault')
})

const FormFeedbackDefault = Loadable({
  loading,
  loader: () => import('./Form/FormFeedbackDefault')
})

const FormGrid = Loadable({
  loading,
  loader: () => import('./Form/FormGrid')
})

const FormInline = Loadable({
  loading,
  loader: () => import('./Form/FormInline')
})

const FormInlineCheckboxes = Loadable({
  loading,
  loader: () => import('./Form/FormInlineCheckboxes')
})

const FormInputGridSizing = Loadable({
  loading,
  loader: () => import('./Form/FormInputGridSizing')
})

const FormInputGroupAddon = Loadable({
  loading,
  loader: () => import('./Form/FormInputGroupAddon')
})

const FormInputGroupButton = Loadable({
  loading,
  loader: () => import('./Form/FormInputGroupButton')
})

const FormInputGroupButtonDropdown = Loadable({
  loading,
  loader: () => import('./Form/FormInputGroupButtonDropdown')
})

const FormInputGroupButtonShorthand = Loadable({
  loading,
  loader: () => import('./Form/FormInputGroupButtonShorthand')
})

const FormInputGroupOverview = Loadable({
  loading,
  loader: () => import('./Form/FormInputGroupOverview')
})

const FormInputGroupSizing = Loadable({
  loading,
  loader: () => import('./Form/FormInputGroupSizing')
})

const FormInputSizing = Loadable({
  loading,
  loader: () => import('./Form/FormInputSizing')
})

const FormInputType = Loadable({
  loading,
  loader: () => import('./Form/FormInputType')
})

const FormLabelHidden = Loadable({
  loading,
  loader: () => import('./Form/FormLabelHidden')
})

const JumbotronDefault = Loadable({
  loading,
  loader: () => import('./Jumbotron/JumbotronDefault')
})

const JumbotronFluid = Loadable({
  loading,
  loader: () => import('./Jumbotron/JumbotronFluid')
})

const KitchenSinkDefault = Loadable({
  loading,
  loader: () => import('./KitchenSink/KitchenSinkDefault')
})

const LayoutDefault = Loadable({
  loading,
  loader: () => import('./Layout/LayoutDefault')
})

const ListGroupAnchorsAndButtons = Loadable({
  loading,
  loader: () => import('./ListGroup/ListGroupAnchorsAndButtons')
})

const ListGroupBadge = Loadable({
  loading,
  loader: () => import('./ListGroup/ListGroupBadge')
})

const ListGroupContextualClasses = Loadable({
  loading,
  loader: () => import('./ListGroup/ListGroupContextualClasses')
})

const ListGroupCustomContent = Loadable({
  loading,
  loader: () => import('./ListGroup/ListGroupCustomContent')
})

const ListGroupDefault = Loadable({
  loading,
  loader: () => import('./ListGroup/ListGroupDefault')
})

const ListGroupDisabledItems = Loadable({
  loading,
  loader: () => import('./ListGroup/ListGroupDisabledItems')
})

const MediaAlignment = Loadable({
  loading,
  loader: () => import('./Media/MediaAlignment')
})

const MediaDefault = Loadable({
  loading,
  loader: () => import('./Media/MediaDefault')
})

const MediaList = Loadable({
  loading,
  loader: () => import('./Media/MediaList')
})

const MediaNested = Loadable({
  loading,
  loader: () => import('./Media/MediaNested')
})

const ModalBackdrop = Loadable({
  loading,
  loader: () => import('./Modal/ModalBackdrop')
})

const ModalCustomTimeout = Loadable({
  loading,
  loader: () => import('./Modal/ModalCustomTimeout')
})

const ModalDefault = Loadable({
  loading,
  loader: () => import('./Modal/ModalDefault')
})

const ModalExternal = Loadable({
  loading,
  loader: () => import('./Modal/ModalExternal')
})

const ModalFadeless = Loadable({
  loading,
  loader: () => import('./Modal/ModalFadeless')
})

const ModalNested = Loadable({
  loading,
  loader: () => import('./Modal/ModalNested')
})

const NavDefault = Loadable({
  loading,
  loader: () => import('./Nav/NavDefault')
})

const NavNavbarDefault = Loadable({
  loading,
  loader: () => import('./Nav/NavNavbarDefault')
})

const NavNavbarTogglerDefault = Loadable({
  loading,
  loader: () => import('./Nav/NavNavbarTogglerDefault')
})

const NavPills = Loadable({
  loading,
  loader: () => import('./Nav/NavPills')
})

const NavTabs = Loadable({
  loading,
  loader: () => import('./Nav/NavTabs')
})

const NavVertical = Loadable({
  loading,
  loader: () => import('./Nav/NavVertical')
})

const PaginationDefault = Loadable({
  loading,
  loader: () => import('./Pagination/PaginationDefault')
})

const PaginationSizingLarge = Loadable({
  loading,
  loader: () => import('./Pagination/PaginationSizingLarge')
})

const PaginationSizingSmall = Loadable({
  loading,
  loader: () => import('./Pagination/PaginationSizingSmall')
})

const PaginationState = Loadable({
  loading,
  loader: () => import('./Pagination/PaginationState')
})

const PopoverDefault = Loadable({
  loading,
  loader: () => import('./Popover/PopoverDefault')
})

const PopoverMulti = Loadable({
  loading,
  loader: () => import('./Popover/PopoverMulti')
})

const ProgressAnimated = Loadable({
  loading,
  loader: () => import('./Progress/ProgressAnimated')
})

const ProgressColor = Loadable({
  loading,
  loader: () => import('./Progress/ProgressColor')
})

const ProgressDefault = Loadable({
  loading,
  loader: () => import('./Progress/ProgressDefault')
})

const ProgressLabels = Loadable({
  loading,
  loader: () => import('./Progress/ProgressLabels')
})

const ProgressMax = Loadable({
  loading,
  loader: () => import('./Progress/ProgressMax')
})

const ProgressMulti = Loadable({
  loading,
  loader: () => import('./Progress/ProgressMulti')
})

const ProgressStriped = Loadable({
  loading,
  loader: () => import('./Progress/ProgressStriped')
})

const TableDefault = Loadable({
  loading,
  loader: () => import('./Table/TableDefault')
})

const TabsDefault = Loadable({
  loading,
  loader: () => import('./Tabs/TabsDefault')
})

const TooltipAutoHide = Loadable({
  loading,
  loader: () => import('./Tooltip/TooltipAutoHide')
})

const TooltipDefault = Loadable({
  loading,
  loader: () => import('./Tooltip/TooltipDefault')
})

const TooltipMulti = Loadable({
  loading,
  loader: () => import('./Tooltip/TooltipMulti')
})

const TooltipUncontrolled = Loadable({
  loading,
  loader: () => import('./Tooltip/TooltipUncontrolled')
})

export {
  AlertContent,
  AlertDefault,
  AlertDismiss,
  AlertLink,
  AlertUncontrolledDismiss,
  BadgeButton,
  BadgeDefault,
  BadgeLinks,
  BadgePills,
  BadgeVariations,
  BreadcrumbDefault,
  BreadcrumbNoList,
  ButtonDefault,
  ButtonDropdownDefault,
  ButtonDropdownMulti,
  ButtonDropdownMultiSplit,
  ButtonGroupDefault,
  ButtonOutline,
  ButtonStateful,
  ButtonToolbarDefault,
  CardAlignment,
  CardBackgrounds,
  CardColumnsDefault,
  CardContentTypes,
  CardDecks,
  CardDefault,
  CardGroups,
  CardHeaderFooter,
  CardImageCaps,
  CardImageOverlay,
  CardOutline,
  CardSizing,
  CarouselCustomTag,
  CarouselDefault,
  CarouselUncontrolled,
  CollapseDefault,
  CollapseEvents,
  ColorDefault,
  DatePickerDefault,
  DropdownCustom,
  DropdownDefault,
  DropdownSizing,
  DropdownUncontrolled,
  FadeDefault,
  FormCustomControls,
  FormDefault,
  FormFeedbackDefault,
  FormGrid,
  FormInline,
  FormInlineCheckboxes,
  FormInputGridSizing,
  FormInputGroupAddon,
  FormInputGroupButton,
  FormInputGroupButtonDropdown,
  FormInputGroupButtonShorthand,
  FormInputGroupOverview,
  FormInputGroupSizing,
  FormInputSizing,
  FormInputType,
  FormLabelHidden,
  JumbotronDefault,
  JumbotronFluid,
  KitchenSinkDefault,
  LayoutDefault,
  ListGroupAnchorsAndButtons,
  ListGroupBadge,
  ListGroupContextualClasses,
  ListGroupCustomContent,
  ListGroupDefault,
  ListGroupDisabledItems,
  MediaAlignment,
  MediaDefault,
  MediaList,
  MediaNested,
  ModalBackdrop,
  ModalCustomTimeout,
  ModalDefault,
  ModalExternal,
  ModalFadeless,
  ModalNested,
  NavDefault,
  NavNavbarDefault,
  NavNavbarTogglerDefault,
  NavPills,
  NavTabs,
  NavVertical,
  PaginationDefault,
  PaginationSizingLarge,
  PaginationSizingSmall,
  PaginationState,
  PopoverDefault,
  PopoverMulti,
  ProgressAnimated,
  ProgressColor,
  ProgressDefault,
  ProgressLabels,
  ProgressMax,
  ProgressMulti,
  ProgressStriped,
  TableDefault,
  TabsDefault,
  TooltipAutoHide,
  TooltipDefault,
  TooltipMulti,
  TooltipUncontrolled
}
