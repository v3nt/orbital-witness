import {describe, it, expect} from 'vitest'
import {mount} from '@vue/test-utils'

import Title from '~/components/ow-Title.vue';

describe('Title', () => {
    it('is a Vue instance', () => {
        const wrapper = mount(Title, {
            props: {
                title: 'my test title',
            },
        })
        expect(wrapper.vm).toBeTruthy()
    })
})