import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from '../../enzyme';
import Twitter from '../Twitter/Twitter';

it('renders without crashing', () => {
  shallow(<Twitter />);
});