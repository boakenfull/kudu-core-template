import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import { Button } from 'kudu-core-framework'

storiesOf('components', module)
  .add('Button', () => (
    <Button>
      {text('Label', 'Hello Storybook')}
    </Button>
  ))
