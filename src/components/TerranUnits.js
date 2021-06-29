const TerranUnits = {
  name: 'TerranUnits',
  template:
    `<div>
      <unit-alert></unit-alert>
      <p>
        Terran Units
      </p>
    </div>`,
  data: () => ({
    units: ['SCV', 'Marine', 'Firebat', 'Medic'],
  }),
};