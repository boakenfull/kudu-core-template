import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import { Demo } from '../../../dist/'

storiesOf('Local - Components', module)
  .add('Demo', () => (
    <Demo>
      {text('Label', 'Hello Storybook')}
    </Demo>
  ))
