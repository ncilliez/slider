export default function Puces({cuneimage, cimageactuel, ctarget, ci}){
    return(
        <li className={cuneimage.id === cimageactuel ? 'target' : 'mespuces'} >
          <img onClick = {() => ctarget(cimageactuel, ci)} src={`images/${cuneimage.id}.jpg`} alt={cuneimage.txt} />
        </li>
      )
    }