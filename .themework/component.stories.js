import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { Button } from 'kudu-core-framework'
import { TextInput } from 'kudu-core-framework'

storiesOf('Themework - Components', module)
  .add('Button', () => (
    <Button>
      {text('Label', 'Hello Storybook')}
    </Button>
  ))
  .add('Text Input', () => (
    <TextInput
      onChange={action('change handler')}
      placeholder={text('Placeholder', 'Placeholder')}
    />
  ))
