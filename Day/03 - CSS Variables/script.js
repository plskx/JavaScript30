// const inputs = document.querySelectorAll('.controls input');

// function handleUpdate() {
//     const suffix = this.dataset.sizing || '';
//     document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
// }

// inputs.forEach(input => input.addEventListener('change', handleUpdate));
// inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

const update = ({ target: { id, value, dataset: {sizing} } }) => {
    document.body.style.setProperty(`--${id}`, `${value}${sizing || ''}`);
    console.log(id);
};
  
document.querySelectorAll('.controls input').forEach(input => input.addEventListener('input', update));