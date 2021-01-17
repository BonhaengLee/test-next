import Head from 'next/head';
import { add } from '../util';

function Page1(): JSX.Element {
  return (
    <div>
      <p>{`10 + 20 = ${add(10, 20)}`}</p>
      <p>This is home page</p>
      <img src="/ICON.png" />
      <Head>
        <title>page1</title>
      </Head>
      <Head>
        <meta name="description" content="hello world" />
      </Head>
      <style jsx>{`
        p {
          color: blue;
          font-size: 18pt;
        }
      `}</style>
    </div>
  );
}
export default Page1;
