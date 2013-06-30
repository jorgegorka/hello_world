describe("Hello My Awesome controller", function() {

  beforeEach(function() {
    browser().navigateTo('/#/hello');
  });

  it('should show the contents of awesomeName', function() {
    expect(element('p.ng-scope').text()).toEqual('My name is Mayte');
  });
});
