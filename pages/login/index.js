import { useState } from 'react';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { auth, signInEmailPass } from '../../components/Firebase';

export default function Login() {
  const userAuth = auth.currentUser;
  const router = useRouter();
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginData((values) => ({ ...values, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(loginData);
    signInEmailPass(auth, loginData.email, loginData.password)
      .then((userCredential) => {
        // Signed in
        router.push('/');
        alert(`Sign In Succesful, Welcome ${userCredential.user.displayName}`);
        //const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        alert(`Error Code: ${error.code}, Error Message: ${error.message}`);
      });
    setLoginData({ email: '', password: '' });
  };

  return (
    <Layout>
      {userAuth ? (
        <div className="container my-5">
          <h3 className="text-center">You Already Logged In</h3>
        </div>
      ) : (
        <div className="">
          <div className="card mx-auto card-compact w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">Login to Next Firebase App</h3>
              <form onSubmit={handleLogin}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full max-w-xs my-2"
                  placeholder="enter email..."
                  value={loginData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input input-bordered w-full max-w-xs my-2"
                  placeholder="enter password..."
                  value={loginData.password}
                  onChange={handleChange}
                  required
                />
                <div class="d-grid">
                  <input
                    type="submit"
                    className="btn btn-sm mt-4 btn-primary"
                    value="Login"
                  />
                </div>
              </form>
              <p className="text-center m-0 pt-2">
                Register <Link href="/register">here</Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
