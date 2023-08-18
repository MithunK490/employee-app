import { FC } from 'react';
import './Style.css';

type AddressPropTypes = {
  line1: string;
  line2: string;
  line3: string;
  onChange1: (event) => void;
  onChange2: (event) => void;
  onChange3: (event) => void;
};

const Address: FC<AddressPropTypes> = ({
  line1,
  line2,
  line3,
  onChange1,
  onChange2,
  onChange3
}) => {
  return (
    <div className='address'>
      <label>Address</label>
      <input
        placeholder='Flat No. / House No.'
        value={line1}
        onChange={onChange1}
        type='text'
      ></input>
      <input placeholder='Address Line 1' value={line2} onChange={onChange2} type='text'></input>
      <input placeholder='Address Line 2' value={line3} onChange={onChange3} type='text'></input>
    </div>
  );
};

export default Address;
