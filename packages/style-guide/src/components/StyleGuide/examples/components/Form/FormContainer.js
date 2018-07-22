import React, { Fragment } from 'react'

import FormCustomControls from './FormCustomControls'
import FormDefault from './FormDefault'
import FormFeedbackDefault from './FormFeedbackDefault'
import FormGrid from './FormGrid'
import FormInline from './FormInline'
import FormInlineCheckboxes from './FormInlineCheckboxes'
import FormInputGridSizing from './FormInputGridSizing'
import FormInputGroupAddon from './FormInputGroupAddon'
import FormInputGroupButton from './FormInputGroupButton'
import FormInputGroupButtonDropdown from './FormInputGroupButtonDropdown'
import FormInputGroupButtonShorthand from './FormInputGroupButtonShorthand'
import FormInputGroupOverview from './FormInputGroupOverview'
import FormInputGroupSizing from './FormInputGroupSizing'
import FormInputSizing from './FormInputSizing'
import FormInputType from './FormInputType'
import FormLabelHidden from './FormLabelHidden'

import FormCustomControlsCode from '../../../code/components/Form/FormCustomControlsCode'
import FormDefaultCode from '../../../code/components/Form/FormDefaultCode'
import FormFeedbackDefaultCode from '../../../code/components/Form/FormFeedbackDefaultCode'
import FormGridCode from '../../../code/components/Form/FormGridCode'
import FormInlineCode from '../../../code/components/Form/FormInlineCode'
import FormInlineCheckboxesCode from '../../../code/components/Form/FormInlineCheckboxesCode'
import FormInputGridSizingCode from '../../../code/components/Form/FormInputGridSizingCode'
import FormInputGroupAddonCode from '../../../code/components/Form/FormInputGroupAddonCode'
import FormInputGroupButtonCode from '../../../code/components/Form/FormInputGroupButtonCode'
import FormInputGroupButtonDropdownCode from '../../../code/components/Form/FormInputGroupButtonDropdownCode'
import FormInputGroupButtonShorthandCode from '../../../code/components/Form/FormInputGroupButtonShorthandCode'
import FormInputGroupOverviewCode from '../../../code/components/Form/FormInputGroupOverviewCode'
import FormInputGroupSizingCode from '../../../code/components/Form/FormInputGroupSizingCode'
import FormInputSizingCode from '../../../code/components/Form/FormInputSizingCode'
import FormInputTypeCode from '../../../code/components/Form/FormInputTypeCode'
import FormLabelHiddenCode from '../../../code/components/Form/FormLabelHiddenCode'
    
import StyleGuideWrapper from '../../../StyleGuideWrapper'
    
const Form = props => {
  return (
    <Fragment>
      <StyleGuideWrapper title="Form" name="FormCustomControls" component={<FormCustomControls />} code={FormCustomControlsCode} {...props} />
				<StyleGuideWrapper title="Form" name="FormDefault" component={<FormDefault />} code={FormDefaultCode} {...props} />
				<StyleGuideWrapper title="Form" name="FormFeedbackDefault" component={<FormFeedbackDefault />} code={FormFeedbackDefaultCode} {...props} />
				<StyleGuideWrapper title="Form" name="FormGrid" component={<FormGrid />} code={FormGridCode} {...props} />
				<StyleGuideWrapper title="Form" name="FormInline" component={<FormInline />} code={FormInlineCode} {...props} />
				<StyleGuideWrapper title="Form" name="FormInlineCheckboxes" component={<FormInlineCheckboxes />} code={FormInlineCheckboxesCode} {...props} />
				<StyleGuideWrapper title="Form" name="FormInputGridSizing" component={<FormInputGridSizing />} code={FormInputGridSizingCode} {...props} />
				<StyleGuideWrapper title="Form" name="FormInputGroupAddon" component={<FormInputGroupAddon />} code={FormInputGroupAddonCode} {...props} />
				<StyleGuideWrapper title="Form" name="FormInputGroupButton" component={<FormInputGroupButton />} code={FormInputGroupButtonCode} {...props} />
				<StyleGuideWrapper title="Form" name="FormInputGroupButtonDropdown" component={<FormInputGroupButtonDropdown />} code={FormInputGroupButtonDropdownCode} {...props} />
				<StyleGuideWrapper title="Form" name="FormInputGroupButtonShorthand" component={<FormInputGroupButtonShorthand />} code={FormInputGroupButtonShorthandCode} {...props} />
				<StyleGuideWrapper title="Form" name="FormInputGroupOverview" component={<FormInputGroupOverview />} code={FormInputGroupOverviewCode} {...props} />
				<StyleGuideWrapper title="Form" name="FormInputGroupSizing" component={<FormInputGroupSizing />} code={FormInputGroupSizingCode} {...props} />
				<StyleGuideWrapper title="Form" name="FormInputSizing" component={<FormInputSizing />} code={FormInputSizingCode} {...props} />
				<StyleGuideWrapper title="Form" name="FormInputType" component={<FormInputType />} code={FormInputTypeCode} {...props} />
				<StyleGuideWrapper title="Form" name="FormLabelHidden" component={<FormLabelHidden />} code={FormLabelHiddenCode} {...props} />
    </Fragment>
  )
}

export default Form
    
