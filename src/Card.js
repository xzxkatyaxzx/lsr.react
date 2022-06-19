import {useState} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function Card (props) {
    const [value, setValue] = useState('');
    const regex = /\d/;

    function onChangeInput(e) {
        let val = e.target.value;
        if (regex.test(val) || val === '') {
            if (val[0] === '0' && val.length > 1) {
                val = val.substring(1);
            }
            setValue(val);
        }
    }

    function onClickButton() {
        setValue('');
        props.updateData(props.id, value)
    }

    return (
        <div className="card">
            <TextField
                type="number"
                InputProps={{ inputProps: { min: 0 } }}
                value={value}
                onChange={(e) => onChangeInput(e)}
                sx={{mr: 2}}
            />
            <Button variant="contained" disabled={value.length === 0} onClick={() => onClickButton()}>set</Button>
        </div>
    )
}