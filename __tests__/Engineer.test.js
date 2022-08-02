const Engineer = require('../lib/Engineer');

test('create new engineer', () => {
    const engineer = new Engineer('Frank', '1', 'email', 'github');

    expect(engineer.name).toBe('Frank');
    expect(engineer.ID).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});