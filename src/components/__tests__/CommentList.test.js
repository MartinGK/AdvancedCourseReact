import React from 'react';
import { mount } from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;

beforeEach(() => {
    const initialState = {
        comments: ['Comment 1', 'Comment 2']
    }

    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    )
});

afterEach(() => {
    wrapped.unmount();
});

it('has an Unordered List', () => {
    expect(wrapped.find("ul").length).toEqual(1)
});

it('create a LI per comment', () => {
    expect(wrapped.find("li").length).toEqual(2)
});

it('shows the text for each comment', () => {
    expect(wrapped.render().text()).toContain('Comment 1')
    expect(wrapped.render().text()).toContain('Comment 2')
});

// describe('the Unordered List', () => {
//     beforeEach(() => {
//         wrapped.find('textarea').simulate('change', {
//             target: { value: 'new comment' }
//         });

//         wrapped.update();
//     });

//     it('has a text area that users cant type in', () => {
//         expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
//     });


//     it('empty textarea on submit', () => {
//         // The line below is commented because we have do it before inthe other test
//         // expect(wrapped.find('textarea').prop('value')).toEqual('new comment');

//         wrapped.find('form').simulate('submit');

//         wrapped.update();

//         expect(wrapped.find('textarea').prop('value')).toEqual('');
//     });

// });
