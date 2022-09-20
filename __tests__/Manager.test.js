const Manager = require('../lib/Manager');
const manager = new Manager('zue', '0444901', 'zuetesei@lol.com', '444');

test('test if we can get the constructor values for the manager', () => {
    expect(manager.name).toBe('zue')
    expect(manager.identity).toBe('0444901')
    expect(manager.email).toBe('zuetesei@lol.com')
});

test('test getName() method', () => {
    expect(manager.getName()).toBe('zue');
});

test('test getId() method', () => {
    expect(manager.getId()).toBe('0444901');
});

test('test getEmail() method', () => {
    expect(manager.getEmail()).toBe('zuetesei@lol.com');
});

test('test getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('444');
})

test('test getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});