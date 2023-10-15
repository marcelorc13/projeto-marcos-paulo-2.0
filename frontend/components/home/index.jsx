'use client'

import './login.css'

import Link from 'next/link'

import Image from 'next/image'
import GoogleImg from '@/public/google-logo.png'

export default function Login() {
    return (
        <main className='w-full h-screen flex flex-col items-center'>
            <div id="container" className="md:border md:border-gray-400 md:border-opacity-30 flex flex-col px-10 pt-12 pb-9 items-center">
                <div>
                    <Image id='logo' src={GoogleImg} />
                </div>

                <div>
                    <h1 className='text-2xl'>Fazer Login</h1>
                </div>

                <div>
                    <p>Ir para o Gmail</p>
                </div>

                <div id='contentEmail' className='w-full relative'>
                    <input id='inputEmail' placeholder='Email ou telefone'h className='w-full rounded h-14 border border-gray-400 border-opacity-30' type='email' />
                </div>

                <div className='w-full flex justify-start'>
                    <p className='text-color-btn font-medium text-sm'>Esqueceu seu e-mail?</p>
                </div>

                <div>
                    <p className='text-sm text-color-cinza'>
                        Não está no seu computador? Use o modo visitante para fazer login com privacidade. <Link className='text-color-btn font-medium' href='https://support.google.com/chrome/answer/6130773?hl=pt-BR'>Saiba mais</Link>
                    </p>
                </div>

                <div className='flex flex-row w-full justify-between font-medium items-center'>
                    <button className='btnCriar'>Criar Conta</button>
                    <button className='btnAvancar'>Avançar</button>
                </div>
            </div>

            <div>
            </div>
        </main>
    )
}