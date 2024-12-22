'use client'

import Link from 'next/link'
import { WeaponList } from './data';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [text, setText] = useState('');

  const onFilterChange = (e: any) => {
    const t = e.target.value;
    setText(t)
  }

  const list = WeaponList.filter(weapon => weapon.name.includes(text))
  console.log('list', list)
  return (
    <>
    <h1 className = "text-2xl text-black mb-5">로블록스 게임 라이벌 메인 총별  쿨다운 , 피해량 , 가격</h1>

<div>
  필터
  <input 
    className='border border-gray-500' 
    value = {text} 
    onChange={onFilterChange}
  />
</div>

    <div className = "text-1xl text-slate-500">
      <ul>
        {
          list.map(Weapon => (
            <div className="mb-3" key = {Weapon.id}>
              <li>{Weapon.id}.<Link href = {'/Weapon/' + Weapon.id}><span className="text-black">{Weapon.name}</span></Link></li>
              <Image
                        src={Weapon.image}
                        alt="image"
                        width="100"
                        height="100"/>
            </div>
          ))
        }
      </ul>
    </div>
    </>
  );
}
