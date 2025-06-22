import styles from './page.module.css';

export default function Page() {
  return (
    <>
      <h3>Contact Me</h3>
      <form
        id='contact-form'
        onsubmit='event.preventDefault(); submitMessage();'
      >
        <div className={styles['form-element']}>
          <label for='name'>Name:</label>
          <div>
            <input
              type='text'
              id='name'
              className={styles['input']}
              name='name'
              required
            />
          </div>
        </div>
        <div class='form-element'>
          <label for='email'>Email:</label>
          <br />
          <div>
            <input
              type='email'
              id='email'
              className={styles['input']}
              name='email'
              required
            />
          </div>
          <div id='email-error-message' class='hide'>
            Please enter a valid email address.
          </div>
        </div>
        <div class='form-element'>
          <label for='message'>Message:</label>
          <div>
            <textarea
              cols='48'
              rows='10'
              className={(styles['input'], styles['text-area'])}
              id='message'
              required
            ></textarea>
          </div>
        </div>

        <button
          type='submit'
          class='button primary disabled'
          id='submit-button'
          onmousedown='pressButton()'
          onmouseup='releaseButton()'
          disabled
        >
          Submit
        </button>
      </form>
    </>
  );
}
