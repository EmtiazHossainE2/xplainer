import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const RequireAuth = ({ children }) => {
  const { currentUser, isLoading } = useSelector((state) => state.user);
  const router = useRouter()

  if (isLoading) {
    return <p className="flex justify-center  items-center h-screen font-bold text-2xl">Loading...</p>
  }

  if (!currentUser?.email) {
    router.push('/')
  }
  return children;
}

export default RequireAuth