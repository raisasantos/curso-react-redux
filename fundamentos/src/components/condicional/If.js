export default props => {

    const elseChild = props.children.filter(child => {
        return child.type && child.type.name === 'Else'
    })[0]

    const ifChildren = props.children.filter(child => {
        return child !== elseChild
    })

    if(props.test) { //aula 2/31 
        return ifChildren
    } else if (elseChild) {
        return elseChild
    } else {
        return false
    }
}
// test está recebendo as propriedades e se der tudo certo ele retornar 

export const Else = props => props.children
