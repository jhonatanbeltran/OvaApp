import React, {useContext} from 'react'

import Link from 'next/Link';

const categories = [{name: 'IA', slug:'inteligencia-artificial'}, {name: 'Procesamiento lenguaje natural', slug: 'lenguaje-natural'}];

const Header = ({ post }) => {
    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="border-b w-full inline-block border-blue-400 py-8">
                <div className="md:float-left block">
                    <Link href="/">
                        <span className="cursor-pointer font-bold text-4xl text-white">

                        </span>
                    </Link>
                </div>
                <div className="hidden md:float-left md:contents">
                    {categories.map((category) => (
                        <link key={category.slug} href={`/category/${category.slug}`}>
                            <span className="md:float-rigth mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                               {category.name} 
                            </span>
                        </link>
                    ))}   
                </div>
            </div>
        </div>
    )
}

export default Header