import './Button.scss'

interface IButtonProps {
    btnName: string;
}

function Button({ btnName }: IButtonProps) {
    return (
        <button className='sp-button'>{btnName}</button>
    )
}

export default Button;
