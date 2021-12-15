import React from "react";
import  { Picker as RNPickerSelect } from '@react-native-picker/picker'
import { PickerView } from '../Picker/stylesPicker'


export default function Picker({onChange, tipo}){

    return(
        <PickerView>
            <RNPickerSelect 
                style={{
                    width: '100%'
                }}
                placeholder={{
                    label: 'Forma de pagamento',
                    color: '#222',
                    value: null
                }}
                selectedValue={tipo}
                onValueChange={(valor) => onChange(valor)}
            > 
                
                <RNPickerSelect.Item label="Cartão de Credito" value="credito"/>
                <RNPickerSelect.Item label="Boleto" value="boleto"/>
                <RNPickerSelect.Item label="PIX" value="pix"/>
            </RNPickerSelect>
        </PickerView>
    )
}
