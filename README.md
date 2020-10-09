# Some d3-prototypes

I designed this stuff as a Monkey Patch, but of course you can do it any way you want.

Okay. We have this given data array.

```js
const data = [
    {
        "A" : 10,
        "B" : 10,
        "C" : "One",
    },
    {
        "A" : 10,
        "B" : 5,
        "C" : "Two",
        "D" : 6,
    }
    ,
    {
        "A" : 10,
        "B" : 5,
        "C" : "Two",
        "D" : 7,
    }
    ,
    {
        "A" : 10,
        "B" : 2,
        "C" : "Three",
        "D" : "unknown",
    }
]
```

## d3.getUniqueValues

```js
console.log("getUniqueValues: ",JSON.stringify(d3.getUniqueValues(data)));
// console: getUniqueValues:  {"A":["10"],"B":["10","2","5"],"C":["One","Three","Two"],"D":["6","7","unknown"]}
```

## d3.subextent
```js
console.log("subextent: ",JSON.stringify(d3.subextent("B",data)));
// console: subextent:  [2,10]
```

## d3.subkeys

```js
console.log("subkeys: ",JSON.stringify(d3.subkeys(data)));
// console: subkeys:  ["A","B","C","D"]
```

## d3.extentList 

```js
console.log("extentList: ",JSON.stringify(d3.extentList(data)));
// console: extentList:  {"A":[10,10],"B":[2,10],"C":[null,null],"D":[6,7]}
```




