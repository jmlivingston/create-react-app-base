import React from 'react'

import MediaAlignment from './MediaAlignment'
import MediaDefault from './MediaDefault'
import MediaList from './MediaList'
import MediaNested from './MediaNested'

import MediaAlignmentCode from '../../../code/components/Media/MediaAlignmentCode'
import MediaDefaultCode from '../../../code/components/Media/MediaDefaultCode'
import MediaListCode from '../../../code/components/Media/MediaListCode'
import MediaNestedCode from '../../../code/components/Media/MediaNestedCode'

import StyleGuideComponent from '../../../StyleGuideComponent'
import StyleGuideWrapper from '../../../StyleGuideWrapper'

const Media = props => {
  return (
    <StyleGuideWrapper title="Media" {...props}>
      <StyleGuideComponent
        title="Media"
        name="MediaAlignment"
        component={<MediaAlignment />}
        code={MediaAlignmentCode}
      />
      <StyleGuideComponent title="Media" name="MediaDefault" component={<MediaDefault />} code={MediaDefaultCode} />
      <StyleGuideComponent title="Media" name="MediaList" component={<MediaList />} code={MediaListCode} />
      <StyleGuideComponent title="Media" name="MediaNested" component={<MediaNested />} code={MediaNestedCode} />
    </StyleGuideWrapper>
  )
}

export default Media
