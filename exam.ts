// var str1 = new String("Files fly but a fly flies.");
// var index = str1.lastIndexOf("But");
// console.log(index);

// var p = [20,"new","messages"]
// var [q,r,s] = p;
// console.log(q);
// console.log(r);

// var p = [] 
// console.log(p.length);
//  var q = [10]
//   console.log(q.length);
// q[0] = 1
// q[1] = 2
// console.log(q.length)

// function pluck<T, K extends keyof T> (o: T, names: K[]): T[K][] {
//     return names.map(n => o[n]);
// }

// interface welcome {
//     name: string;
//     age: number;
// }

// let person: welcome = { name: "User", age: 35 };

// let strings: string[] = pluck(person, ["name"]);
// console.log("welcome "+strings);

function pad(value: string, padding: any){
    if(typeof padding === "number"){
        return Array(padding+1).join(".") + value;
    }
    if(typeof padding === "string"){
        return padding+value;
    }
    throw new Error("Expected string or number");
}

pad("Test with me!!",true);