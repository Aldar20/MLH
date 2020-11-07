const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json')

describe('Inputs', function () {

    describe('Inputs are displayed', function () {

        it('TC-010 Name', function () {
            browser.url('');
            let name = $(sel.name).isDisplayed();
            expect(name).toEqual(true);
        });

        it('TC-011 Gender He', function () {
            const gender = $$(sel.gender)[0].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-012 Gender She', function () {
            const gender = $$(sel.gender)[1].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-013 Gender It', function () {
            const gender = $$(sel.gender)[2].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-014 Age', function () {
            const age = $(sel.age).isDisplayed();
            expect(age).toEqual(  true);
        });

        it('TC-015 Story', function () {
            const story = $(sel.story).isDisplayed();
            expect(story).toEqual(true);
        });

        it('TC-016 Create', function () {
            const create = $(sel.create).isDisplayed();
            expect(create).toEqual(true);
        });

    });

});
