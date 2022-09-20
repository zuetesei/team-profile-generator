const Intern = require('../lib/Intern');
const intern = new Intern('zue', '0444901', 'zuetesei@lol.com', 'UC Davis');

test('test if we can get the constructor values for the manager', () => {
    expect(intern.name).toBe('zue')
    expect(intern.identity).toBe('0444901')
    expect(intern.email).toBe('zuetesei@lol.com')
});

test('test getName() method', () => {
    expect(intern.getName()).toBe('zue');
});

test('test getId() method', () => {
    expect(intern.getId()).toBe('0444901');
});

test('test getEmail() method', () => {
    expect(intern.getEmail()).toBe('zuetesei@lol.com');
});

test('test getOfficeNumber() method', () => {
    expect(intern.getSchool()).toBe('UC Davis');
})

test('test getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});