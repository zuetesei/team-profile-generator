const Employee = require('../lib/Employee.js');
const employee = new Employee('zue', '0444901', 'zuetesei@lol.com');

test('test if we can get the constructor values for the employee', () => {
    expect(employee.name).toBe('zue')
    expect(employee.id).toBe('0444901')
    expect(employee.email).toBe('zuetesei@lol.com')
});

test('test getName() method', () => {
    expect(employee.getName()).toBe('zue');
});

test('test getId() method', () => {
    expect(employee.getId()).toBe('0444901');
});

test('test getEmail() method', () => {
    expect(employee.getEmail()).toBe('zuetesei@lol.com');
});

test('test getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});
