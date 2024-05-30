const formData = {
  newsletter_form: async () => {
    const myPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('foo');
      }, 300);
    });
    return myPromise;
  },
  DEFAULT: () => null,
};

export default formData;
