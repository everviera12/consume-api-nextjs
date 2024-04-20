import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

// import hooks

// components
import ProfileUser from "@/components/ProfileUser";

export default function Home({ users }) {
  console.log(users);

  return (
    <main className={`${montserrat.className}`}>
      <div className="bg-stone-900 grid grid-cols-1 justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5 py-3 md:w-full">
        {users.map(user => (
          <div key={user.id} className="w-full flex justify-center">
            <div className="border border-purple-600 rounded justify-center flex w-[250px] ">
              <div className="flex justify-center md:w-full">
                <ProfileUser
                  key={user.id}
                  user={user}
                />
              </div>
            </div>
          </div>

        ))}
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const response = await fetch(url);
  const users = await response.json();
  console.log(users);

  return {
    props: {
      users: users
    }
  };
}
