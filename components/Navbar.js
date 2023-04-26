import { SvgSearch, SvgBell, SvgMenu } from './SvgIcons';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { auth, signOutFunc } from './Firebase';

export default function Navbar() {
  const router = useRouter();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  const SignOut = (e) => {
    e.preventDefault();
    if (confirm('Are you sure want to Logout?')) {
      signOutFunc(auth).then(() => {
        router.push('/');
      });
    }
  };

  return (
    <div className="container mx-auto navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <SvgMenu />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link className="btn btn-ghost normal-case text-xl" href="/">
          Firebase Blog
        </Link>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://picsum.photos/seed/wfsds/180/180" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/user-profile">Profile</Link>
              </li>
              <li>
                <Link href="/add-blog">New Blog</Link>
              </li>
              <li>
                <a onClick={SignOut}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <button className="btn btn-sm btn-primary">
            <Link href="/login">Login</Link>
          </button>
        )}
      </div>
    </div>
  );
}
