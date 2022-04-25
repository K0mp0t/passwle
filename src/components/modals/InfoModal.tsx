import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Как играть" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Угадайте пароль за 6 попыток. Используются 2000 самых популярных паролей. После каждой попытки цвет ячеек с
        буквами будет меняться, чтобы показать вам, насколько вы близки к загаданному паролю.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="С"
          status="correct"
        />
        <Cell value="Л" />
        <Cell value="О" />
        <Cell value="В" />
        <Cell value="О" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Буква С есть в загаданном пароле и стоит в нужном месте.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="Б" />
        <Cell value="У" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="К"
          status="present"
        />
        <Cell value="В" />
        <Cell value="А" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Буква К есть в загаданном пароле, но стоит в другом месте.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="И" />
        <Cell value="Г" />
        <Cell value="Р" />
        <Cell isRevealing={true} isCompleted={true} value="О" status="absent" />
        <Cell value="К" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Буквы О нет в загаданном пароле.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Это открытая и русифицированная версия игры Wordle -{' '}
        <a
          href="https://github.com/K0mp0t/react-wordle-ru"
          className="underline font-bold"
        >
          здесь вы можете найти код
        </a>{' '}
      </p>
    </BaseModal>
  )
}
