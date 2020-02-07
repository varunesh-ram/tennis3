import React from 'react';
import { mount } from 'enzyme';
import TennisGame from "../component/TennisGame";
import Player from "../component/Player";
import Scorer from "../component/Scorer";

describe(("<TennisGame/> component"), () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(< TennisGame />);
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should have two players and one scorer", () => {
    expect(wrapper.find(Player).length).toBe(2);
    expect(wrapper.find(Scorer).length).toBe(1);
  });
});
describe(("<TennisGame/> Game functionality"), () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(< TennisGame />);
  });

  it("On Game Start, Score Should be Love All", () => {
    expect(wrapper.find(Scorer).find("label").text()).toEqual("Love all");
  });
});