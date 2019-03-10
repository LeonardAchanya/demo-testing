// import {sum} from '../math';


// describe("Examining the syntax of Jest tests", () => {
//   it("sums numbers", () => {
//     expect(sum(1,2)).toEqual(3);
//     expect(sum(2,2)).toEqual(4);
//   });
// });

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Twitter from '../components/Twitter/Twitter';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<Twitter />, div);
// });

import React from 'react';
import { shallow } from 'enzyme';
import setupTest from './setupTest';
import Twitter from '../components/Twitter/Twitter';

it('renders without crashing', () => {
  shallow(<Twitter />);
});