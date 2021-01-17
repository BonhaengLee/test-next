Page2.getInitialProps = async ({ query }: any) => {
  // ❤ : getInitialProps 함수에서 동적 임포트로 sayHello.js 모듈을 가져온다.
  const { sayHello } = await import('../sayHello');
  // ❤ : sayHello 함수의 반환값을 콘솔에 출력
  console.log(sayHello());
  // throw new Error("exception in getInitialProps");
  const text = query.text || 'none';
  // const data = await callApi();
  const data = '123123';
  return { text, data };
};

interface inputType {
  text: string;
  data: string;
}

export default function Page2({ text, data }: inputType) {
  // function onClick() {
  //   // ❤ : 동적 임포트를 사용하여 sayHello 모듈을 가져온다.
  //   import('../sayHello').then(({ sayHello }) => console.log(sayHello()));
  // }
  return (
    <div>
      <p>this is home page2</p>
      <p>({`text: ${text}`})</p>
      <p>{`data is ${data}`}</p>
      {/* ❤ : onClick 함수를 버튼에 연결 */}
      {/* <button onClick={onClick}>sayHello</button> */}
    </div>
  );
}
