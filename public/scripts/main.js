import Modal from './modal.js'

const modal = Modal()

// Pegar quando o 'marcar como lido' for clicado
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
    button.addEventListener('click', event => {
        // Abrir modal
        modal.open()
    })
})

// Abre o modal ao clicar em 'Excluir'
const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button => {
    button.addEventListener('click', event => {
        modal.open()
    })
})