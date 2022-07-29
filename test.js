let state = {
    items: ['testitem','324',2,5,6,7,8],
    urls: [2,3,4,6,78,3,9]
}

let newish = []
const y = 4
const x = [1,2,4,5,6,7]
console.log(x)
for (const each of x){
    if (each !== y) newish.push(each)
}

console.log(newish)
newish.includes(1) ? console.log(true) : console.log('asdf')
// const ingList = state.items.map((e, i)  => (`<div id=item${i}>${e}</div>`))

// const feedItems = tate.urls.map((e, i) => (<FeedItem url={e} key={i}/>));

console.log(state.items.push(2))
for (const each of state.items){
console.log(each)}
// console.log(ingList)
// console.log(feedItems)