# Refactor Stories

1. Open style-guide/config.js

  - Delete all "require" statements that aren't referencing .js
  - Add a require for each .js file under the components. Like Alert.js, AlertContent.js, etc

2. Delete index.js files for each style-guide/components/[COMPONENT_NAME]
3. Copy and paste the following under code on top style-guide/components/[COMPONENT_NAME].js

  - Replace code in steps 1-4

```javascript
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'

// 1 ADD ANY EXTRA IMPORTS HERE
import config from '../../config'

storiesOf('2_CHANGE_TO_PARENT_DIR', module)
  .addDecorator(config.wrapper)
  .add(
    '3_CHANGE_TO_FILE_NAME',
    withInfo(config.defaults.info)(() => (
      // 4_ADD MARKUP HERE
    ))
  )
```

4. Hit Shift+Windows+F to format
5. Hit Alt+S to save

Once this has been done for all the files, do the following:

6. Make sure storybook still looks fine for all pages.
