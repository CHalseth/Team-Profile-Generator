const Manager = require('../lib/Manager');

test('creates new manager', () => {
    const manager = new Manager('Frank', '1', 'gmail.com', '555-555-5555');

    expect(manager.name).toBe('Frank');
    expect(manager.ID).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.number).toEqual(expect.any(String));
})