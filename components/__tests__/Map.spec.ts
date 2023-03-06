import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Map from '~/components/Map.vue';

describe('Map', () => {
    it('is a Vue instance', () => {
        const wrapper = mount(Map)
        expect(wrapper.vm).toBeTruthy()
    })
})