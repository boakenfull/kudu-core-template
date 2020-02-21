import React from 'react'
import { storiesOf } from '@storybook/react'

import { Button } from 'kudu-core-framework'
import '../dist/core.css'

storiesOf('components', module)
  .add('Button', () => (
    <body>
      <Button>Button</Button>
    </body>
  ))
