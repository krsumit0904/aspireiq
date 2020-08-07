import React from 'react'
import Receiver from '.'
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders receiver component without crashing', () => {
  shallow(<Receiver />);
});

it('renders a input field in Receiver component', () => {
  const wrapper = mount(<Receiver />)
  expect(wrapper.find('input[type="text"]').length).toEqual(1);
});
