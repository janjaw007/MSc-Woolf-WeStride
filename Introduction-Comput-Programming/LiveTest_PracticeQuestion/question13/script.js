const phones = [
  {
    currentPer: 89,
    onIdle: 3,
    onCall: 1,
    consumeIdle: 0.2,
    consumeCall: 5,
  },
  {
    currentPer: 49,
    onIdle: 5,
    onCall: 1,
    consumeIdle: 0.4,
    consumeCall: 2,
  },
  {
    currentPer: 78,
    onIdle: 2,
    onCall: 1,
    consumeIdle: 0.5,
    consumeCall: 3,
  },
  {
    currentPer: 19,
    onIdle: 20,
    onCall: 1,
    consumeIdle: 0.1,
    consumeCall: 1,
  },
  {
    currentPer: 99,
    onIdle: 5,
    onCall: 1,
    consumeIdle: 1,
    consumeCall: 2,
  },
  {
    currentPer: 100,
    onIdle: 7,
    onCall: 1,
    consumeIdle: 1,
    consumeCall: 3,
  },
];

function batteryRemain(currentPer, onIdle, onCall, consumeIdle, consumeCall) {
  let consumedBattery =
    onIdle * consumeIdle + onCall * consumeIdle * consumeCall;
  let onePerConsume = ((onIdle + onCall) / consumedBattery) * 1;
  console.log(onePerConsume);
  return onePerConsume * currentPer;
}

const remainPhones = phones.map((phone) => {
  return batteryRemain(
    phone.currentPer,
    phone.onIdle,
    phone.onCall,
    phone.consumeIdle,
    phone.consumeCall
  );
});

console.log(remainPhones);
