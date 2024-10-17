import { describe, it, expect } from 'vitest';
import { sum } from '../src/utils';

describe('sum', () => {
    it('adds two numbers correctly', () => {
        const result = sum(1, 2);
        expect(result).toBe(3);
    });

    it('adds negative numbers correctly', () => {
        const result = sum(-1, -2);
        expect(result).toBe(-3);
    });

    it('adds zero correctly', () => {
        const result = sum(0, 0);
        expect(result).toBe(0);
    });
});
