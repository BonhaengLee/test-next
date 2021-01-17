// import { callApi } from '../src/api';
import Router from 'next/router';

Page2.getInitialProps = async ({ query }: any) => {
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
  return (
    <div>
      <button onClick={() => Router.push('/page1')}>page1로 이동</button>
      <p>this is home page2</p>
      <p>({`text: ${text}`})</p>
      <p>{`data is ${data}`}</p>
    </div>
  );
}
