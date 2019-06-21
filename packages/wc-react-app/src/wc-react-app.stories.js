import React from 'react'
import { storiesOf } from '@storybook/react'
import WCReactApp from './wc-react-app';

storiesOf('Button', module)

    .add('Sample React App', () => (
        <WCReactApp />
    ))