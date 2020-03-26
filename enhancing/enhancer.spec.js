const { succeed, fail, repair, get } = require('./enhancer.js');
// test away!
const item = {
	name: 'string',
	durability: 90,
	enhancement: 20
};

describe('Test Suite', () => {
	describe('Repair', () => {
		it('should return with durability of 100', () => {
			expect(repair(item)).toStrictEqual({ ...item, durability: 100 });
		});

		it('should not change any other values', () => {
			expect(repair(item)).toStrictEqual({ ...item, durability: 100 });
		});
	});

	describe('Succeed', () => {
		it('should increase enhancement by 1', () => {
			expect(succeed(item)).toStrictEqual({
				...item,
				enhancement: item.enhancement + 1
			});
		});
		it('should not alter enhancement if equal to 20', () => {
			expect(succeed(item)).toStrictEqual({ ...item, enhancement: 20 });
		});
	});

	describe('Fail', () => {
		it('should decrease durability by 5 if enhancement less than 15', () => {
			expect(fail(item)).toStrictEqual({
				...item,
				durability: item.durability - 5
			});
		});

		it('should decrease durability by 10 and enhancement by 1 if greater than 16', () => {
			expect(fail(item)).toStrictEqual({
				...item,
				durability: item.durability - 10,
				enhancement: item.enhancement - 1
			});
		});

		it('should decrease durability by 10 if enhancement is 16', () => {
			expect(fail(item)).toStrictEqual({
				...item,
				durability: item.durability - 10
			});
		});
	});
});
