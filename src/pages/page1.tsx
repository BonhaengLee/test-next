import Head from 'next/head';
// import Icon from '../static/ICON.png';
import Link from 'next/link';

function Page1(): JSX.Element {
  return (
    <div>
      <Link href="/page2">
        <a>page2로 이동</a>
      </Link>
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
