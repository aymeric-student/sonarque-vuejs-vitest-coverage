import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Calculatrice from '../src/components/calculatrice/calculatrice.component.vue';

describe('Calculatrice.vue', () => {
    it('renders correctly', () => {
        const wrapper = mount(Calculatrice);
        expect(wrapper.find('h1').text()).toBe('Calculatrice');
        expect(wrapper.find('p').text()).toBe('0');
    });

    it('increments the value when button is clicked', async () => {
        const wrapper = mount(Calculatrice);
        const button = wrapper.find('button');

        await button.trigger('click');
        expect(wrapper.find('p').text()).toBe('1');

        await button.trigger('click');
        expect(wrapper.find('p').text()).toBe('2');
    });
});
