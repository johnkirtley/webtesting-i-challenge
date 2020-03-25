const { succeed, fail, repair, get } = require('./enhancer.js');
// test away!
const item = {
	name: 'string',
	durability: 90,
	enhancement: 12
};

it('repairing item should increase durability to 100', function() {
	expect(repair(item)).toStrictEqual({ ...item, durability: 100 });
});
