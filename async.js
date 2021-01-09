// async & await
// clear style of using promise :)

// 1. async
async function fetchUser() {
    // do network reqeust in 10 secs....
    return 'ellie';

    // return new Promise((resolve, reject) => {
    //     // do network reqeust in 10 secs....
    //     return 'ellie';
    // });
    // 위의 Promise()를 사용하는 대신 async를 함수 앞에 선언하면 자동으로
    // Promise()로 변환된다.
  }
  
  const user = fetchUser();
  user.then(console.log);
  console.log(user);
  
  // 2. await ✨
  function delay(ms) {
      // ms 만큼 기다렸다가 Promise()를 리턴한다.
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function getApple() {
    await delay(2000);
    return '🍎';
  }
  
  async function getBanana() {
    await delay(1000);
    return '🍌';
  }
  
  function pickFruits() {
      return getApple().then(apple => {
        return getBanana().then(banana => `${apple} + ${banana}`);
      });
  }
  // 위의 코드는 콜백지옥처럼 되어 버릴 수 있다.
  // 그래서 위의 코드를 아래처럼 수정한다.
  async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
  }
  
  pickFruits().then(console.log);
  
  // 3. useful APIs ✨
  function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then(fruits =>
      fruits.join(' + ')
    );
  }
  pickAllFruits().then(console.log);
  
  function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
  }
  
  pickOnlyOne().then(console.log);