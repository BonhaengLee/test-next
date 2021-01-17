import React, { useState } from 'react';
import styled, { DefaultTheme, ThemeProvider } from 'styled-components';
import { defaultTheme, darkTheme } from '../Theme/Theme';

// styled-components 생성.
const Text = styled.p`
  color: var(--color__primary);
`;

// 테마 모듈 선언
const themes = {
  default: defaultTheme,
  dark: darkTheme,
};

// 테마 타입 선언
type Theme = keyof typeof themes; // 'default' | 'dark'

// 버튼 렌더링을 위해 테마 모듈 key를 배열로 변환
const keysOfThemes = Object.keys(themes) as Theme[];

const Home = () => {
  const [theme, setTheme] = useState<Theme>('default');

  console.log(theme);

  return (
    <ThemeProvider theme={themes[theme]}>
      <Text>Hello world!</Text>

      {keysOfThemes.map((theme) => (
        <button key={theme} onClick={() => setTheme(theme)}>
          {theme}
        </button>
      ))}
    </ThemeProvider>
  );
};

export default Home;
