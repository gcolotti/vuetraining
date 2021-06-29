const ProtossUnits = {
  name: 'ProtossUnits',
  template:
    `<div>
      <unit-alert></unit-alert>
      <p>
        Protoss Units
      </p>
    </div>`,
  data: () => ({
    units: ['Probe', 'Zealot', 'Dragoon', 'Dark Templar'],
  }),
};