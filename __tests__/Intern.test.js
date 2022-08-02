const Intern = require('../lib/Intern');

test('creates new intern', () => {
    const intern = new Intern('Frank', '1', 'email', 'school');

    expect(intern.name).toBe('Frank');
    expect(intern.ID).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});