import { SyntheticEvent } from 'react';
import cx from './cx';
import { measureLines } from '@/service/util';

/**
 * useRef, useEffect 제거 버전
 */

const TextBox2_Diff = () => {
  const handleInput = (e: SyntheticEvent) => {
    const elem = e.target as HTMLTextAreaElement;
    if (!elem) return;
    const val = elem.value;
    const lines = Math.min(Math.max(measureLines(elem, val), 3), 15); // 최소 3줄 최대 15줄
    elem.rows = lines;
  };

  return (
    <>
      <h3>
        #2_Diff. React<sub>uncontrolled. canvas</sub>
      </h3>
      <div className={cx('container')}>
        <textarea className={cx('textarea')} rows={3} onInput={handleInput} />
      </div>
    </>
  );
};

export default TextBox2_Diff;
