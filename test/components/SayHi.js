import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import SayHi from '../../src/components/SayHi';

describe('<SayHi />', () => {
  it('displays a name', () => {
    const wrapper = shallow(<SayHi name="John" />);

    expect(wrapper).to.have.descendants('p');
    expect(wrapper).to.contain.text('John');
  });
});
