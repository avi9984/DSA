// Given a string s containing only the characters (, ), {, }, [ and ], determine if the input string is valid.
// A string is valid if:

// Every opening bracket has a corresponding closing bracket of the same type.
// Brackets are closed in the correct order.
// Every closing bracket has a matching opening bracket.
// Examples
// Input: "()"
// Output: true
// Input: "()[]{}"
// Output: true

function vaildParenthices(str){
    let res=[];
    let map={
        ')':'(',
        '}':'{',
        ']':'['
    }

    for(let char of str){
        if(char==='('||char==='{'||char==='['){
            res.push(char)
        }else{
            if(res.pop() !==map[char])
                return false
        }
    }
    return res.length===0
}
console.log(vaildParenthices("()"))
console.log(vaildParenthices("(){}[]"))
console.log(vaildParenthices("(]"))
console.log(vaildParenthices("([)]"))
console.log(vaildParenthices("{[]}"))