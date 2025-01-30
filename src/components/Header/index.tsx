import { HeaderContainer, HeaderContent, NewTransactionButton } from './styled'
import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '../../assets/LogoTimer.svg'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.DialogTrigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.DialogTrigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
