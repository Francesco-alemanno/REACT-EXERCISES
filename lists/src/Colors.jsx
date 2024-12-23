import { Color } from "./Color";

export function Colors({colors}){
    return(
        <div>
              <ul>
      {colors.map(color => (
        <Color key={color.id} color={color} />
      ))}
    </ul>
        </div>
    )
}