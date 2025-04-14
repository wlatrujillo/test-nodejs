describe("Tests", () => {
  it("test", () => {
var q = 'user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue',
    out = {
      'user': {
        'name': {
          'firstname': 'Bob',
          'lastname': 'Smith'
        },
        'favoritecolor': 'Light Blue'
      }
    };
Test.assertDeepEquals(convertQueryToMap(q), out);
  });
});