import { SignIn } from '@clerk/nextjs'
import Navbar from '@/components/Navbar';

export default function Page() {
  return (
    <div className='flex justify-center bg-black'>
        <Navbar />
        {/* <SignIn /> */}
    </div>
  );
}