import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styled";

import logoImg from '../../assets/LogoTimer.svg'

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="" />

                <NewTransactionButton>Nova transação</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    )
}