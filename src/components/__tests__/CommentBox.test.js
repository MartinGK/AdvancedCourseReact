import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    )
});

afterEach(() => {
    wrapped.unmount();
});

it('has a text area and two button', () => {
    expect(wrapped.find("textarea").length).toEqual(1)
    expect(wrapped.find("button").length).toEqual(2)
});

describe('the text area', () => {
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment' }
        });

        wrapped.update();
    });

    it('has a text area that users cant type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });


    it('empty textarea on submit', () => {
        // The line below is commented  because we have do it before inthe other test
        // expect(wrapped.find('textarea').prop('value')).toEqual('new comment');

        wrapped.find('form').simulate('submit');

        wrapped.update();

        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });

});
