import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';
import moxios from 'moxios';

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{ name: "comment" }, { name: "comment 2" }]
    });
});


afterEach(() => {
    moxios.uninstall();
});

it('i can fetch a list of comments and dispaly them', (done) => {
    //Attemp to render the *entire* page
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    )
    //find the 'fetchComments' button and click it
    expect(wrapped.find('li').length).toEqual(0);
    wrapped.find('.fetch-comments').simulate('click');

    //Expect to find a list of comments
    moxios.wait(() => {
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(2);
        done();
        wrapped.unmount();
    });
});