// QUnit.module("Test Suite 1");
// QUnit.test("Test A", (assert) => {
//     assert.ok(true, "This shouldn't fail");
// });

// QUnit.test("Test B", (assert) => {
//     assert.ok(1 === 1, "This shouldn't fail");
//     assert.ok(false, "This should fail");
// });

QUnit.module("App.Talk");
QUnit.test("GetGreeting Test", (assert) => {
    assert.equal(App.Talk.GetGreeting(new Date(2018, 0,1, 0, 0,0,0)), "Welcome back!");
    assert.equal(App.Talk.GetGreeting(new Date(2018, 0,1, 4, 59,59,999)), "Welcome back!");
    assert.equal(App.Talk.GetGreeting(new Date(2018, 0,1, 5, 0,0,0)), "Good morning!");
});