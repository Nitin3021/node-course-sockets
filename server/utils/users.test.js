const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Kris',
      room: 'Nurse course'
    }, {
      id: '2',
      name: 'Goku',
      room: 'React course'
    }, {
      id: '3',
      name: 'Bulma',
      room: 'Nurse course'
    }];
  });

  it('should add new User', () => {
    var users = new Users();
    var user = {
      id: '1231',
      name: 'Nitin',
      room: 'Office Fans'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it ('should remove a User', () => {
    var userId = '2'
    var removeUser = users.removeUser(userId);

    expect(removeUser.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it ('should not remove User', () => {
    var userId = '99'
    var removeUser = users.removeUser(userId);

    expect(removeUser).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it ('should find User', () => {
    var userId = '1';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it ('should not find User', () => {
    var userId = '99';
    var user = users.getUser(userId);

    expect(user).toNotExist();
  });

  it('should return names for Nurse course', () => {
    var userList = users.getUserList('Nurse course');

    expect(userList).toEqual(['Kris', 'Bulma']);
  });

  it('should return names for React course', () => {
    var userList = users.getUserList('React course');

    expect(userList).toEqual(['Goku']);
  });
})
