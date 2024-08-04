import { injectGlobal } from "@emotion/css";

export const GlobalStyles = () => {
  return (
    <>
      {injectGlobal`
    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }

    html {
      box-sizing: border-box;
    }

    html,
    body,
    #root {
      width: 100%;
      height: 100%;
      padding: 0;
      margin: 0;
    }
`}
    </>
  );
};
