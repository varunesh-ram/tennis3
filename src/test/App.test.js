import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';
import TennisGame from "../component/TennisGame";

describe(("<App/> component"), () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should have the title", () => {
    expect(wrapper.find("header h1").text()).toEqual("Tennis Game");
  });
  it("should load TennisGame component", () => {
    expect(wrapper.find(TennisGame)).toBeDefined();
  });
});
