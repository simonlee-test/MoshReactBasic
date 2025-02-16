
interface Props{
  children: string;
  onClick: () => void;
  color?: 'primary' | 'secondary' | 'danger';
}


const Button = ({children, onClick, color ='secondary'}:Props) =>{
  return(
    <button className={"btn btn-" + color} onClick={onClick}>{children}</button>
  )
}

export default Button