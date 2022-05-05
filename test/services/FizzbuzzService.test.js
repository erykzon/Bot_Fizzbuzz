const explorer = require("./../../explorers.json");
const FizzbuzzService  =jest.createMockFromModule("./../../lib/services/FizzbuzzService"); 

describe("Realizando la prueba de If anidado para todas las validaciones",()=>{
    test("Realizando la prueba de If anidado para todas las validaciones",()=>{
        expect.extend({
            applyValidationInExplorer(explorer){
                const assignFizzBuzzTrickMix = function(explorer){  
                    if(explorer.score%5 === 0 && explorer.score%3 === 0){
                        explorer.trick = "FIZZBUZZ";
                        return explorer;
                    }else 
                    if(explorer.score%5 === 0){
                        explorer.trick = "BUZZ";
                        return explorer;
                    }else 
                    if(explorer.score%3 === 0){
                        explorer.trick = "FIZZ";
                        return explorer;
                    }else{
                        explorer.trick = explorer.score;
                        return explorer;
                    }
                };
            }
        });   
    });
    test("Realizando requerimeinto solo fizzbuzz", () =>{
        // const number1 = FizzbuzzService.applyValidationInNumber(1)
        // const number15 = FizzbuzzService.applyValidationInNumber(15)
        // const number5 = FizzbuzzService.applyValidationInNumber(5)
        // const number3 = FizzbuzzService.applyValidationInNumber(3)

        // expect(number3).toBe("FIZZ")
        // expect(number5).toBe("BUZZ")
        // expect(number15).toBe("FIZZBUZZ")
        // expect(number1).toBe(1)
        expect.extend({
            applyValidationInNumber(number){
                if (number % 5 === 0 && number % 3 === 0){
                    return "FIZZBUZZ"
                } else
                if(number % 5 === 0){
                    return "BUZZ"
                } else
                if(number % 3 === 0){
                    return "FIZZ"
                }else{
                    return number
                }
            }
        })
    })
})

