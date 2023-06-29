import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, senha })
    });

    if (response.ok) {
      window.location.href = '/pagina-apos-login';
    } else {
      alert('Erro ao fazer login');
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen">
        <main className="flex flex-col px-20 py-5 border rounded-3xl bg-zinc-300">
            <header className="flex flex-col">
                <h1 
                    className="font-sans text-4xl mb-1 font-bold text-sky-500">Acesse o sistema 
                    <span 
                        className="text-sky-600"> Oasis
                    </span>
                </h1>
                <p 
                    className="text-gray-500 text-sm mt-2 mb-5 font-serif">Faça o login:
                </p>
            </header>
            <form className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                    <label 
                        className="font-sans font-semibold text-sm text-gray-800"
                        htmlFor='email'>E-mail</label>
                    <input 
                        className="px-4 py-3 bg-white border text-gray-800 leading-5 border-gray-300 rounded"
                        type='email' placeholder='Digite seu e-mail'/>
                </div>
                <div className="flex flex-col gap-2">
                    <label 
                        className="font-sans font-semibold text-sm text-gray-800 flex justify-between"
                        htmlFor='password'>Senha
                        <a href='#'
                        className="text-sky-600 hover:text-sky-400 hover:underline"
                        >
                            Esqueceu a senha?
                        </a>
                        </label>
                    <input 
                        className="px-4 py-3 bg-white border text-gray-800 leading-5 border-gray-300 rounded"
                        type='password' placeholder='Digite sua senha'/>
                </div>
                <footer 
                    className="flex flex-col gap-2 mt-2">
                    <button
                        className="w-full bg-sky-500 py-4 border-none rounded font-sans hover:-translate-y-px hover:ease-linear hover:m-0.5"
                        onClick={handleLogin}
                        >LOGAR
                    </button>
                    <span className="text-sky-600 px-2 py-3 flex gap-1">Sem conta?
                    <a href="#" className="hover:underline hover:text-sky-900">Cadastre-se</a></span>
                </footer>
            </form>
        </main>
    </div>
  )
}

export default Login;
