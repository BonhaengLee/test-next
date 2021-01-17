import Link from 'next/Link';

// ❤ : 1) Component 속성값은 현재 렌더링하려는 페이지의 컴포넌트이고, pageProps 속성값은 해당 페이지의 getInitialProps 함수가 반환한 값
export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      {/* ❤ : 2 ~ ) 메뉴 UI 구현 */}
      <Link href="/page1">
        <a>page1</a>
      </Link>
      <Link href="/page2">
        <a>page2</a>
      </Link>
      {/* ❤ : ~ 2) */}
      {/* ❤ : 페이지 컴포넌트를 렌더링한다. */}
      <Component {...pageProps} />
    </div>
  );
}
