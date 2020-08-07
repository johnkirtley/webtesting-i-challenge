const { succeed, fail, repair, get } = require('./enhancer.js');
const { items } = require('../items');

describe('Test Suite', () => {
	describe('Repair', () => {
		it('should return with durability of 100', () => {
			const item = repair(items[0]);
			expect(item.durability).toBe(100);
		});

		it('should not change any other values', () => {
			const item = repair(items[1]);
			expect(item).toStrictEqual({ ...item, durability: 100 });
		});
	});

	describe('Succeed', () => {
		it('should increase enhancement by 1', () => {
			let item = items[2];
			expect(succeed(item)).toStrictEqual({
				...item,
				enhancement: item.enhancement + 1,
			});
		});
		it('should not alter enhancement if equal to 20', () => {
			let item = items[3];
			expect(succeed(item)).toStrictEqual({ ...item, enhancement: 20 });
		});
	});

	describe('Fail', () => {
		it('should decrease durability by 5 if enhancement less than 15', () => {
			let item = items[4];
			expect(fail(item)).toStrictEqual({
				...item,
				durability: item.durability - 5,
			});
		});

		it('should decrease durability by 10 and enhancement by 1 if greater than 16', () => {
			let item = items[5];
			expect(fail(item)).toStrictEqual({
				...item,
				durability: item.durability - 10,
				enhancement: item.enhancement - 1,
			});
		});

		it('should decrease durability by 10 if enhancement is 16', () => {
			let item = items[6];
			expect(fail(item)).toStrictEqual({
				...item,
				durability: item.durability - 10,
			});
		});
	});

	describe('Get', () => {
		it('should not alter name if enhancement is 0', () => {
			let item = items[7];
			expect(get(item)).toStrictEqual(item);
		});

		it('should add enhancement to name if greater than 0', () => {
			let item = items[8];
			expect(get(item)).toStrictEqual({
				...item,
				name: `[+${item.enhancement}] ${item.name}`,
			});
		});
	});
});
