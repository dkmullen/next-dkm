import styles from './page.module.css';
import clsx from 'clsx';
import { PageHeader } from '../components/pageHeader';

export default function Page() {
  return (
    <div className='page'>
      <PageHeader line1='Contact Me' />
      <form className={styles['contact-form']}>
        <div className={styles['form-element']}>
          <label htmlFor='name'>Name:</label>
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
        <div className={styles['form-element']}>
          <label htmlFor='email'>Email:</label>
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
          <div className={clsx(styles['error-message'], styles.hide)}>
            Please enter a valid email address.
          </div>
        </div>
        <div className={styles['form-element']}>
          <label htmlFor='message'>Message:</label>
          <div>
            <textarea
              cols='48'
              rows='10'
              className={styles['text-area']}
              id='message'
              required
            ></textarea>
          </div>
        </div>

        <button
          type='submit'
          className={clsx('button', 'accent')}
          id='submit-button'
        >
          Submit
        </button>
      </form>
    </div>
  );
}

          // onmousedown='pressButton()'
          // onmouseup='releaseButton()'
