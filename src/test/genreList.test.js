import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import fetchMock from "fetch-mock";
import { genreListAction } from "../redux/artist/actions";
import { LIST_GENRE } from "../redux/artist/constants";
import React from "react";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { itemList as ItemList } from "../components/itemList";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

configure({ adapter: new Adapter() });

it("click on item in the list of genres", () => {
  const wrapper = shallow(<ItemList data={["garage_rock"]} history={[]} />);
  wrapper.instance().randomSong = jest.fn();
  const { randomSong } = wrapper.instance();
  wrapper.find(".test-garage_rock").simulate("click");
  expect(randomSong.mock.calls.length).toEqual(1);
});

it("called to endpoint /genres ", () => {
  fetchMock.sandbox().mock("/genres", 200);

  const expectedActions = [
    {
      type: LIST_GENRE,
      genreList: []
    }
  ];
  const store = mockStore();
  store.dispatch(genreListAction([]));
  expect(store.getActions()).toEqual(expectedActions);
});

it("show 3 random song /genres ", () => {
  fetchMock.sandbox().mock("/genres", 200);

  const expectedActions = [
    {
      type: LIST_GENRE,
      genreList: []
    }
  ];
  const store = mockStore();
  store.dispatch(genreListAction([]));
  expect(store.getActions()).toEqual(expectedActions);
});
