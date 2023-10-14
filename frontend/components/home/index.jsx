'use client'

import './login.css'

import Image from 'next/image'
import GoogleImg from '@/public/google-logo.png'
import Link from 'next/link'

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

                <div>
                    4
                </div>

                <div>
                    <p className='text-sm text-color-cinza'>
                        Não está no seu computador? Use o modo visitante para fazer login com privacidade. <Link className='text-color-btn font-medium' href='https://support.google.com/chrome/answer/6130773?hl=pt-BR'>Saiba mais</Link>
                    </p>
                </div>

                <div>6</div>
            </div>

            <div>
            </div>
        </main>
    )
}