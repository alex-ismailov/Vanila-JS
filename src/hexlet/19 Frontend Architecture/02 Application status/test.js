  const input = document.querySelector('.phone');
  input.addEventListener('keyup', () => {
    if (input.value === '') {
      state.registrationProcess.valid = true;
      state.registrationProcess.submitDisabled = true;
    } else if (!input.value.match(/^\d+$/)) {
      state.registrationProcess.valid = false;
      state.registrationProcess.submitDisabled = true;
    } else {
      state.registrationProcess.valid = true;
      state.registrationProcess.submitDisabled = false;
    }
    render(state);
  });
};