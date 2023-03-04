import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase/Firebase.init';

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter()

  if (loading) {
    return <p className="flex justify-center  items-center h-screen font-bold text-2xl">Loading...</p>
  }

  if (!user) {
    return router.back()
  }
  return children;
}

export default RequireAuth