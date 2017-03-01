import React from 'react'
import { storiesOf } from '@kadira/storybook' // eslint-disable-line import/no-extraneous-dependencies
import TodoItem from '../src/components/TodoItem'

storiesOf('TodoItem', module)
  .add('not complete', () => (
    <TodoItem text="Not complete" />
  ))
  .add('complete', () => (
    <TodoItem text="Complete" complete />
  ))