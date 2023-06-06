import { AuthContext } from '@/contexts/AuthContext';
import { FormEvent, useContext, useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      email,
      password,
    };

    await signIn(data)
  }

  return (
    <section className="mt-5 flex flex-1 items-center justify-center">
      <form className="max-w-xs block space-y-2.5" onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          placeholder='e-mail'
          onChange={(e) => setEmail(e.target.value)}
          className="block bg-zinc-800 rounded text-zinc-100 px-2.5 py-1.5 outline-sky-500"
        />

        <input
          type="password"
          value={password}
          placeholder='senha'
          onChange={(e) => setPassword(e.target.value)}
          className="block bg-zinc-800 rounded text-zinc-100 px-2.5 py-1.5 outline-sky-500"
        />

        <button type="submit" className='bg-sky-500 w-full rounded lowercase text-base font-light px-2.5 py-1.5'>Entrar</button>
      </form>
    </section>
  );
}
