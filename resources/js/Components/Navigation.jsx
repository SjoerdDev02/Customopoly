import { Link, usePage } from "@inertiajs/react";
import ApplicationLogo from "./ApplicationLogo";
import styles from './styles/Navigation.module.css';
import Dropdown from '@/Components/Dropdown';

const GuestNav = ({ user }) => {
  const { url } = usePage();

  return (
    <nav className={styles.navigation}>
        {!user ? (
          <>
            <Link href={route('home')}>
              <ApplicationLogo />
            </Link>
            <div>
              <Link className={styles.nav_item} href={route('login')}>
                Log in
              </Link>

              <Link className={styles.nav_item} href={route('register')}>
                Register
              </Link>
            </div>
          </>
        ) : (
          <>
            <Link href={route('games.index', { id: user.id })}>
              <ApplicationLogo />
            </Link>
            <div>
              {!url.includes('/customizer') && (
                <Link className={styles.nav_item} href={route('games.store', { id: user.id })} method='post' as='button'>
                  Create Game
                </Link>
              )}

              <Dropdown>
                  <Dropdown.Trigger>
                      <span className="inline-flex rounded-md">
                          <button
                              type="button"
                              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                          >
                              {user.name}

                              <svg
                                  className="ms-2 -me-0.5 h-4 w-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                              >
                                  <path
                                      fillRule="evenodd"
                                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                      clipRule="evenodd"
                                  />
                              </svg>
                          </button>
                      </span>
                  </Dropdown.Trigger>

                  <Dropdown.Content>
                      <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                      <Dropdown.Link href={route('logout')} method="post" as="button">
                          Log Out
                      </Dropdown.Link>
                  </Dropdown.Content>
              </Dropdown>
          </div>
          </>
        )}
    </nav>
  );
}

export default GuestNav;