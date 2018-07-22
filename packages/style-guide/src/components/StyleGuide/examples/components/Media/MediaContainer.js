import React, { Fragment } from 'react'

import MediaAlignment from './MediaAlignment'
import MediaDefault from './MediaDefault'
import MediaList from './MediaList'
import MediaNested from './MediaNested'

import MediaAlignmentCode from '../../../code/components/Media/MediaAlignmentCode'
import MediaDefaultCode from '../../../code/components/Media/MediaDefaultCode'
import MediaListCode from '../../../code/components/Media/MediaListCode'
import MediaNestedCode from '../../../code/components/Media/MediaNestedCode'
    
import StyleGuideWrapper from '../../../StyleGuideWrapper'
    
const Media = props => {
  return (
    <Fragment>
      <StyleGuideWrapper title="Media" name="MediaAlignment" component={<MediaAlignment />} code={MediaAlignmentCode} {...props} />
				<StyleGuideWrapper title="Media" name="MediaDefault" component={<MediaDefault />} code={MediaDefaultCode} {...props} />
				<StyleGuideWrapper title="Media" name="MediaList" component={<MediaList />} code={MediaListCode} {...props} />
				<StyleGuideWrapper title="Media" name="MediaNested" component={<MediaNested />} code={MediaNestedCode} {...props} />
    </Fragment>
  )
}

export default Media
    
