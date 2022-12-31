import React, { useState } from 'react';
import Cherry from '../../assets/slot-cherry.png';
import Lemon from '../../assets/slot-lemon.png';
import Melon from '../../assets/slot-melon.png';
import Prune from '../../assets/slot-prune.png';
import Seven from '../../assets/slot-seven.png';

import styles from './slotMachine.module.css';

const Slot = ({ value }: { value: number }) => {
  let img = Cherry;
  switch (value) {
    case 0: 
        img = Cherry; 
        break;
    case 1: 
        img = Lemon; 
        break;
    case 2: 
        img = Melon; 
        break;
    case 3: 
        img = Prune; 
        break;
    case 4: 
        img = Seven; 
        break;
  }
  return (
    <div className={styles.slot}>
      <img src={img}/>
    </div>
  );
};

const getSlots = (slots: number) => {
  let slotNumbers: number[] = Array.from(Array(slots).keys()).map(() =>
    Math.floor(Math.random() * 5)
  );
  return slotNumbers;
}


const SlotMachine = ({ slots }: { slots: number }) => {
  const [slotNumbers, setSlotNumbers] = useState(getSlots(slots));
  const [amount, setAmount] = useState(100);

  const win = () => {
    let winning = slotNumbers.every((slot) => slot === slotNumbers[0]);
    return winning;
  }

  const pullLever : React.MouseEventHandler<HTMLButtonElement> = () => {
    setSlotNumbers(getSlots(slots));
    if (win()) {
      setAmount(amount + 20);
    } else {
      setAmount(amount => amount - 1);
    }
  }


  return (
    <div className={styles.slotMachineContainer}>
      {amount > 0 && <div>Saldo: €{amount}</div>}
      <div className={styles.slotMachineSubContainer}>
        <button className={styles.lever} onClick={pullLever} disabled={amount > 0 ? false : true}>Pull Lever</button>
        {slotNumbers.map((slot, i) => (
          <Slot value={slot} key={i} />
        ))}
      </div>
      {amount == 0 && <p className={styles.linearWipe}>Je bent bankroet!</p>}
 
    </div>
  );
};

const SlotMachineApp = () => {
  return (
    <SlotMachine slots={3} />
  );
};

export default SlotMachineApp;