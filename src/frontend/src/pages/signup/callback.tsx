import { useRouter } from 'next/router';

import { APIURL, GithubOAuthCodeKey } from '../../constants/Constants';

const SigninCallbackPage = () => {
  const route = useRouter();
  const { code } = route.query;

  if (code !== undefined) {
    window.location.href = '/';
    fetch(
      `${APIURL}accounts/signup?code=${code}`,
      {
        method: 'POST',
      },
    ).catch(() => {});

    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 1);

    document.cookie = `${GithubOAuthCodeKey}=${code}; expires=${expirationDate.toUTCString()}; path=/`;
  }
  return null;
};

export default SigninCallbackPage;
