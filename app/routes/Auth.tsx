import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";

export const meta = () => {
  return [
    { title: "resume analyzer | Auth" },
    { name: "description", content: "Login To your account" },
  ];
};

const Auth = () => {
  const { isLoading, auth } = usePuterStore();
  const location = useLocation();
  const next = location.search.split("next=")[1];
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate(next);
    }
  }, [auth.isAuthenticated, next]);
  return (
    <main className=" bg-[url('/images/bg-main.svg')] bg-cover min-h-screen flex item-center justify-center">
      <div className="gradient-border shadow-lg">
        <section className="flex flex-col gap-8 p-10 bg-white rounded-2xl">
          <div className="flex flex-col items-center gap-2">
            <h1>Welcome</h1>
            <p>Sign in to analyze your Resume</p>
          </div>
          <div>
            {isLoading ? (
              <button className=" auth-button animate-pulse">
                <p>Signing you in...</p>
              </button>
            ) : (
              <>
                {auth.isAuthenticated ? (
                  <button className=" auth-button" onClick={auth.signOut}>
                    <p>Sign Out</p>
                  </button>
                ) : (
                  <button className=" auth-button" onClick={auth.signIn}>
                    <p>Sign In</p>
                  </button>
                )}
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Auth;
