import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import WCReactApp from './wc-react-app';

describe('WC React App Tests', () => {
    it('should render correctly', () => {
        const wrapper = mount(
            <WCReactApp />
        );

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
