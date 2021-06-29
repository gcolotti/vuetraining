const ZergUnits = {
  name: 'ZergUnits',
  template:
    `<div>
      <unit-alert></unit-alert>
      <p>
        Zerg Units
      </p>
    </div>`,
  data: () => ({
    units: ['Drone', 'Zergling', 'Hydralisk', 'Mutalisk'],
  }),
};