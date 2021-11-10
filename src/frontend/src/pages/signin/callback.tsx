import { useRouter } from 'next/router';

import { APIURL } from '../../constants/Constants';

const SigninCallbackPage = () => {
  const route = useRouter();
  const { code } = route.query;

  if (code !== undefined) {
    fetch(
      `${APIURL}signup?code=${code}`,
      {
        method: 'POST',
      },
    );

    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 1);

    document.cookie = `githubCode=${code}; expires=${expirationDate.toUTCString()}; path=/`;
    console.log(document.cookie);
  }

  return null;
};

export default SigninCallbackPage;
