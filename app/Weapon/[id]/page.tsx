import { WeaponList } from "@/app/data";            
import Image from "next/image";
import Link from "next/link";

export default function WeaponDetail({params} : {params: {id:number}} ) {
    const id = +params.id;
    const weapon = WeaponList.filter(weapon => weapon.id === id)[0]
    console.log('weapon',weapon)
    return (
        <main>
            <div className="mb-3">
                <Link href="/">&lt;뒤로 가기</Link>
            </div>
            <h1>Weapon {id} Detail</h1>
            <dl className="grid grid-cols-[15%_85%] mt-5">

                <dt>이름</dt>
                <dd>{weapon.name}</dd>

                <dt>가격</dt>
                <dd>{weapon.price}</dd>

                <dt>쿨다운</dt>
                <dd>{weapon.cooldown}</dd>

                <dt>대미지</dt>
                <dd>{weapon.damege}</dd>

                <dt>사진</dt>
                <dd>
                    <Image
                        src={weapon.image}
                        alt="image"
                        width="200"
                        height="200"/>                
                </dd>

                
            </dl>
        </main>
    )
}