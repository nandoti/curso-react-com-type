
import React from "react";

// Quais propriedades os componentes esperam receber (serve para isso)
export interface IInputLoginProps {
  label: string;
  value: string;
  type?: string; // "?" serve para que o evento não seja obrigatório

  // Eventos para o input
  onChange: (newValue: string) => void;
  onPressEnter?: () => void; // "?" serve para que o evento não seja obrigatório
}

export const InputLogin = React.forwardRef<HTMLInputElement, IInputLoginProps>((props, ref) => {
  return (
  
    <label>
      <span>{props.label}</span>
      <input
        ref={ref}
        value={props.value}
        type={props.type}
        onChange={(e) => props.onChange(e.target.value)}
        onKeyDown={(e) =>
          e.key === "Enter"
            ? props.onPressEnter && props.onPressEnter() // logica do react
            : undefined
        }
      />
    </label>
  );
});
