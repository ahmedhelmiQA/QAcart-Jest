const {expect} = require("@jest/globals");
const {checkName} = require("../name");

describe("check name test case",function(){
 ///                            beforeAll  - afterAll  - beforeEach  - afterEach    ( hooks)

// beforeAll(function(){       // once time before run the all test  cases //
    
// })
// afterAll(function(){               // once time after run the all test caes //

// })

// beforeEach(function(){      // before each test case //
   
// })

// afterEach(function(){             // after each test case //
//   })   
test("should returns USER ifnthe name contains @",function(){
        const expectedResult = "USER";
        const actulResult    = checkName("ahm@d");
        expect(actulResult).toEqual(expectedResult);
    })

test.skip("should returns USER ifnthe name contains .",function(){
        const expectedResult = "USER";
        const actulResult    = checkName("ahm.d");
        expect(actulResult).toEqual(expectedResult);
    })

test("should returns the correct name",function(){
        const expectedResult = "ahmed";
        const actulResult    = checkName("ahmed");
        expect(actulResult).toEqual(expectedResult);
    })
})

