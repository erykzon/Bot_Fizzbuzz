const explorer = require('./../../explorers.json')
const FizzbuzzService  =jest.createMockFromModule('./../../lib/services/FizzbuzzService') 

// descibre("Realizando la prueba de If anidado para todas las validaciones",()=>{

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
           }
        }
     })   
    })
// })

