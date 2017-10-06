import chai from 'chai';
import React from 'react';
import { Hello } from '../src/HelloComponent';
import { shallow, mount, render } from 'enzyme';

let expect = chai.expect

describe("<Hello/>", ()=>{
    "use strict";

    it('renders without exploding', ()=>{
        const wrapper = shallow(<Hello />);
        expect(wrapper).to.have.length(1);
    });

    it('renders one <h1> tag', ()=>{
        const wrapper = shallow(<Hello />);
        expect(wrapper.find('h1')).to.have.length(1);
    });
})
