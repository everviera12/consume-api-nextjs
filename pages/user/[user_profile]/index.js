import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function UserProfile({ userProfile }) {
  const { id, name, phone, email, address: { city, street, zipcode } } = userProfile
  console.log(`%cEl usuario es:`, 'color: yellow', userProfile);


  return (
    <main className='bg-stone-900 h-screen text-white'>
      <article className='grid justify-center'>
        <section className='grid gap-2 justify-center py-5'>
          <Link href={'/user'} className='bg-purple-400 border border-purple-800 text-white font-bold text-sm justify-center flex rounded p-1 w-[130px] transition-all hover:-translate-x-2 hover:font-medium hover:bg-purple-300'>Back to user list</Link>

          <Image
            className="w-[200px] rounded-sm"
            src={`https://avatars.githubusercontent.com/u/${id}`}
            width={"200"}
            height={"1"}
          />
        </section>

        <section className='grid justify-center md:flex md:gap-14'>
          <div className='grid gap-1'>
            <span>{name}</span>
            <span>{city}</span>
            <span>{street}, {zipcode}</span>
          </div>

          <div className='grid gap-2 justify-center'>
            <span>Phone: {phone}</span>
            <span>Email: {email}</span>
            <Link href={'/page-not-found'} className='text-yellow-400 font-medium bg-neutral-700 flex justify-center rounded p-1 transition-all hover:text-yellow-300 hover:bg-zinc-500'>
              <span className='hover:translate-x-1 transition-transform ease-in-out'>View 404 page example</span>
            </Link>
          </div>
        </section>
      </article>
    </main>

  );
};

export async function getServerSideProps({ params }) {
  const { user_profile } = params;
  const url = `https://jsonplaceholder.typicode.com/users/${user_profile}`;
  console.log(url);
  const response = await fetch(url);
  const userProfile = await response.json();
  console.log(userProfile);

  return {
    props: {
      userProfile: userProfile
    }
  }
}
