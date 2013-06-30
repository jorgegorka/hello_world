describe("E2E: Testing Routes", function() {

  beforeEach(function() {
    browser().navigateTo('/');
  });

  it('should jump to the /videos path when / is accessed', function() {
    expect(browser().location().path()).toBe('/');
  });
});
