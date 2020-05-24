// 비동기 처리 

// findUserAndCallback(1, function(user) {
//     console.log("user: ", user)
// })

// function findUserAndCallback(id, cb){
//     setTimeout(function() {
//         console.log("waited 0.1 sec.")
//         const user = {
//             id : id,
//             name : "User" + id,
//             email : id + "@test.com"
//         }
//         cb(user)
//     }, 100)
// }


// fetch() 함수는 api의 url을 인자로 받고, 미래 시점에 얻게될 api 호출 결과를 Promise
// 객체로 리턴

// then() 과 catch() 메서드는 또 다른 Promise 객체를 리턴한다. 그리고 이 Promise 객체는
// 인자로 넘긴 콜백 함수의 리턴값을 다시 then()과 catch() 메서드를 통해 접근할 수 있게함.
// 다시 말하면 then()과 catch() 메서드는 마치 사슬처럼 계속 연결하여 연쇄적으로 호출 가능

// then() 메서드를 호출하여 결과값을 갖고 실행할 로직을 담은 콜백 함수를 인자로 받는다.
// 정상적인 인자를 넘긴 경우 then() 
// 비정상적인 인자를 넘긴 경우 (error가 발생할 경우) catch() - 예외 처리 로직을 담은
// 콜백 함수를 인자로 받는다.
findUser(1).then(function (user) {
    console.log("user:", user)
})

function findUser(id){
    // callback 함수를 인자로 넘기는 대신 Promise 객체를 생성하여 리턴
    // Promise 객체는 new 키워드와 생성자를 통해 생성할 수 있는데 이 생성자는 함수를 인자로 받는다
    // 이 함수 인자는 resolve와 reject라는 2개의 함수형 파라미터를 가진다.
    return new Promise(function (resolve) {
        // 생성자의 인자로 넘어가는 함수 인자의 바디에서는
        // resolve() : 정상처리
        // reject() : 예외처리
        setTimeout(function() {
            console.log("waited 0.1 sec.")
            const user = {
                id : id,
                name : "User" + id,
                email : id + "@test.com"
            }
            resolve(user)
        }, 100)
    })
}


// await 은 async 키워드가 붙은 함수 내부에서만 사용 가능
// 비동기 함수가 리턴하는 Promise로 부터 결과값을 추출해준다.
async function fetchAuthorName(postId) {
    // await 키워드를 사용하면 일반 비동기처럼 바로 실행이 다음 라인으로 넘어가는 것이 아니라
    // 결과값을 얻을 수 있을 때까지 기다려준다.
    // async 키워드가 붙어 있는 함수를 호출하면 명시적으로 Promise 객체를 생성하여
    // 리턴하지 않아도 Promise객체가 리턴된다.
    const postResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    )
    const post = await postResponse.json()
    const userId = post.userId
    const userResponse = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    )
    const user = await userResponse.json()
    return user.name
  }
  
  fetchAuthorName(1).then((name) => console.log("name:", name))