import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import classes from './main-header.module.css'
import MainHeaderBackGround from "./main-header-background";
import NavLink from "./nav-link";
export default function MainHeader(){
    return(
    <>
    <MainHeaderBackGround/>
    <header className={classes.header}>
        <Link className ={classes.logo} href="/">

        {/* next에서 제공하는 Image 태그를 사용하면 자동으로 지연로딩을 지원한다 -> 개발자도구를 통해 확인할 수 있음 */}
        <Image src={logoImg} alt="A plate with food on it" priority/>
            NextLevel Food
        </Link>

        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink href="/meals">Brose Meals</NavLink>
                </li>
                <li>
                    <NavLink href="/community">Foodies Community</NavLink>
                </li>
            </ul>
        </nav>
    </header>    
    </>
)
}