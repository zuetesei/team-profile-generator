const Engineer = require('../lib/Engineer');
const engineer = new Engineer('zue', '0444901', 'zuetesei@lol.com', 'zuetesei');

test('test if we can get the constructor values for the manager', () => {
    expect(engineer.name).toBe('zue')
    expect(engineer.id).toBe('0444901')
    expect(engineer.email).toBe('zuetesei@lol.com')
});

test('test getName() method', () => {
    expect(engineer.getName()).toBe('zue');
});

test('test getId() method', () => {
    expect(engineer.getId()).toBe('0444901');
});

test('test getEmail() method', () => {
    expect(engineer.getEmail()).toBe('zuetesei@lol.com');
});

test('test getGithub() method', () => {
    expect(engineer.getGithub()).toBe('zuetesei');
})

test('test getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});