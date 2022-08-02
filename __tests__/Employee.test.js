const Employee = require ('../lib/Employee');

test('creates new employee', () => {
    const employee = new Employee('Frank', "1", 'gmail.com');

    expect(employee.name).toBe('Frank');
    expect(employee.ID).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});
