import React from 'react';
interface ItemsType{
    id: string;
  slug: string;
  nameBn: string;
  icon: string;
}
const NavLink = async() => {
    const res = await fetch("https://api.api-store.workers.dev/api/bazardor/categories");
    const data:ItemsType[] = await res.json()

    return (
        <div className='flex items-center gap-6 container mx-auto mt-5 gap-2 border-b border-gray-300 '>
            {
                data.map(items => <div className='flex items-center mb-2' key={items.id}>
                    <p>{items.icon}</p>
            <p>{items.nameBn}</p>
                </div>)
            }
        </div>
    );
};

export default NavLink;